import { useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

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
  targetPosition: PropTypes.arrayOf(PropTypes.number),
  lerpFactor: PropTypes.number,
  targetDirectionVector: PropTypes.arrayOf(PropTypes.number),
}.isRequired;

CameraMotion.defaultProps = {
  targetPosition: [0, 7, 23],
  lerpFactor: 0.02,
  targetDirection: [0, 10, -30],
};
