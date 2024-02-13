import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { useRapier } from "@react-three/rapier";

import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";

export default function DragControl() {
  const controlsRef = useRef();
  const [selectedHandle, setSelectedHandle] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialDistance, setInitialDistance] = useState(null);
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
      const {handle} = castRay.collider.parent();
      const selectedRigidBody = world.getRigidBody(handle);

      if (castRay && !isDragging && selectedRigidBody.userData) {
        const selectedRigidBodyPositionVector = new THREE.Vector3(
          selectedRigidBody.translation().x,
          selectedRigidBody.translation().y,
          selectedRigidBody.translation().z,
        );

        const distance = selectedRigidBodyPositionVector.distanceTo(
          camera.position,
        );

        setIsDragging(true);
        setSelectedHandle(handle);
        setInitialDistance(distance);
      } else {
        selectedRigidBody.setBodyType(0);

        setIsDragging(false);
        setSelectedHandle(null);
        setInitialDistance(null);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [camera, isDragging, world]);

  useFrame(() => {
    if (
      selectedHandle &&
      isDragging &&
      world.getRigidBody(selectedHandle).userData
    ) {
      const direction = new THREE.Vector3();

      camera.getWorldDirection(direction);

      const newPosition = direction
        .multiplyScalar(initialDistance)
        .add(camera.position);
      const selectedRigidBody = world.getRigidBody(selectedHandle);

      selectedRigidBody.setTranslation(newPosition, true);
      selectedRigidBody.setBodyType(2);
    }
  });

  return <PointerLockControls ref={controlsRef} />;
}
