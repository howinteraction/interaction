import { useRef } from "react";
import PropTypes from "prop-types";
import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

export default function CameraMotion({
  targetPosition,
  lerpFactor,
  targetDirection,
}) {
  const { camera, gl } = useThree();
  const controls = useRef();
  const targetPositionVector = new THREE.Vector3(...targetPosition);
  const targetDirectionVector = new THREE.Vector3(...targetDirection);

  if (controls.current && controls.current.isLocked) {
    controls.current.unlock();
  }

  useFrame(() => {
    if (!controls.current.isLocked) {
      camera.position.lerp(targetPositionVector, lerpFactor);
      camera.lookAt(targetDirectionVector);
    }
  });

  return <PointerLockControls ref={controls} args={[camera, gl.domElement]} />;
}

CameraMotion.propTypes = {
  targetPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  lerpFactor: PropTypes.number.isRequired,
  targetDirection: PropTypes.arrayOf(PropTypes.number).isRequired,
};
