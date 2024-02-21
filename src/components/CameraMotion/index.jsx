import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from "prop-types";

import * as THREE from "three";

export default function CameraMotion({
  targetPosition,
  lerpFactor,
  targetDirection,
}) {
  const { camera } = useThree();
  const targetPositionVector = new THREE.Vector3(...targetPosition);
  const targetDirectionVector = new THREE.Vector3(...targetDirection);

  useFrame(() => {
    camera.position.lerp(targetPositionVector, lerpFactor);
    camera.lookAt(targetDirectionVector);
  });
}

CameraMotion.propTypes = {
  targetPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  lerpFactor: PropTypes.number.isRequired,
  targetDirection: PropTypes.arrayOf(PropTypes.number).isRequired,
};
