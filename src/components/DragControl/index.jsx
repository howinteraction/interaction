import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

import * as THREE from "three";

export default function DragControl() {
  const { camera, scene, raycaster } = useThree();
  const [selectedObject, setSelectedObject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialDistance, setInitialDistance] = useState(null);

  const controls = useRef();

  useEffect(() => {
    controls.current.lock();

    const handleClick = () => {
      const center = new THREE.Vector2(0, 0);

      raycaster.setFromCamera(center, camera);

      const intersection = raycaster.intersectObjects(scene.children, true);

      if (intersection.length > 0 && !isDragging) {
        setSelectedObject(intersection[0].object);

        const distance = intersection[0].object.position.distanceTo(
          camera.position,
        );

        setInitialDistance(distance);
        setIsDragging(true);
      } else {
        setIsDragging(false);
        setSelectedObject(null);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [camera, scene.children, raycaster, isDragging]);

  useFrame(() => {
    if (selectedObject && isDragging) {
      const direction = new THREE.Vector3();

      camera.getWorldDirection(direction);

      const newPosition = direction
        .multiplyScalar(initialDistance)
        .add(camera.position);

      selectedObject.position.copy(newPosition);
      selectedObject.lookAt(camera.position);
    }
  });

  return (
    <PointerLockControls ref={controls} />
  );
}
