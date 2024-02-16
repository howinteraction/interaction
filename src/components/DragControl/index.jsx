import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { useRapier } from "@react-three/rapier";

import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";

import PropTypes from "prop-types";
import restrictPosition from "../../utils/restrictPosition";

export default function DragControl({
  minX,
  maxX,
  maxY,
  minZ,
  maxZ,
  boxSize,
  setBoxSize,
  controlsRef,
}) {
  const meshScaleRef = useRef();
  const [selectedHandle, setSelectedHandle] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialDistance, setInitialDistance] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const { camera } = useThree();
  const { world } = useRapier();

  useEffect(() => {
    controlsRef.current.lock();

    const handleClick = () => {
      const origin = new THREE.Vector3().copy(camera.position);
      const direction = new THREE.Vector3();

      camera.getWorldDirection(direction);

      const originOffset = 2;
      const maxToi = 100;
      const adjustOrigin = origin.add(direction.multiplyScalar(originOffset));
      const ray = new RAPIER.Ray(adjustOrigin, direction);
      const castRay = world.castRay(ray, maxToi, true);

      if (castRay) {
        const { handle } = castRay.collider.parent();
        const selectedRigidBody = world.getRigidBody(handle);

        if (!isDragging && selectedRigidBody.userData?.isDraggable) {
          const selectedRigidBodyPositionVector = new THREE.Vector3(
            selectedRigidBody.translation().x,
            selectedRigidBody.translation().y,
            selectedRigidBody.translation().z,
          );

          setClickedPosition(selectedRigidBody.translation());

          const distance = selectedRigidBodyPositionVector.distanceTo(
            camera.position,
          );

          setIsDragging(true);
          setSelectedHandle(handle);
          setInitialDistance(distance);
        } else if (selectedHandle && isDragging) {
          world.getRigidBody(selectedHandle).setBodyType(0);
          if (meshScaleRef.current) {
            setBoxSize(meshScaleRef.current);
          }

          setIsDragging(false);
          setSelectedHandle(null);
          setInitialDistance(null);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [camera, isDragging, world, selectedHandle, clickedPosition]);

  useFrame(() => {
    if (
      selectedHandle &&
      isDragging &&
      world.getRigidBody(selectedHandle).userData?.isDraggable
    ) {
      const direction = new THREE.Vector3();

      camera.getWorldDirection(direction);

      const newPosition = direction
        .multiplyScalar(initialDistance)
        .add(camera.position);
      const selectedRigidBody = world.getRigidBody(selectedHandle);
      const adjustedPositionX = restrictPosition(newPosition.x, minX, maxX);
      const adjustedPositionY = restrictPosition(
        newPosition.y,
        clickedPosition.y,
        maxY,
      );
      const adjustedPositionZ = restrictPosition(newPosition.z, minZ, maxZ);

      const adjustedPosition = new THREE.Vector3(
        adjustedPositionX,
        adjustedPositionY,
        adjustedPositionZ,
      );

      const finalDistance = adjustedPosition.distanceTo(camera.position);
      const distanceRatio = finalDistance / initialDistance;

      if (selectedRigidBody.userData.isPerspective) {
        const perspectiveTolerance = 0.9;

        if (distanceRatio > perspectiveTolerance) {
          const currentHeight = adjustedPositionY;
          const maxHeight = 29;
          const heightRatio = Math.min(currentHeight / maxHeight, 1);
          const scale = 1 + heightRatio;
          const newSize = boxSize * scale;

          selectedRigidBody
            .collider(0)
            .setHalfExtents(
              new THREE.Vector3(newSize / 2, newSize / 2, newSize / 2),
            );

          meshScaleRef.current = newSize;
        } else {
          const newSize = boxSize * distanceRatio;
          const minimumSize = 0.5;
          const adjustedSize = newSize < minimumSize ? minimumSize : newSize;

          selectedRigidBody
            .collider(0)
            .setHalfExtents(
              new THREE.Vector3(
                adjustedSize / 2,
                adjustedSize / 2,
                adjustedSize / 2,
              ),
            );

          meshScaleRef.current = adjustedSize;
        }
      }

      selectedRigidBody.setTranslation(
        new THREE.Vector3(
          adjustedPositionX,
          adjustedPositionY,
          adjustedPositionZ,
        ),
        true,
      );

      selectedRigidBody.setBodyType(2);
    }
  });

  return <PointerLockControls ref={controlsRef} />;
}

DragControl.propTypes = {
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minZ: PropTypes.number.isRequired,
  maxZ: PropTypes.number.isRequired,
  controlsRef: PropTypes.instanceOf(Object).isRequired,
  boxSize: PropTypes.number,
  setBoxSize: PropTypes.func,
};

DragControl.defaultProps = {
  boxSize: 2,
  setBoxSize: () => {},
};
