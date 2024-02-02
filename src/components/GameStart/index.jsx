import * as THREE from "three";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import Sphere from "../models/Sphere";
import TutorialBackground from "../models/TutorialBackground";

function AnimateCamera() {
  const { camera } = useThree();

  const targetPosition = new THREE.Vector3(0, 7, 23);
  const lerpFactor = 0.0075;

  useFrame(() => {
    camera.position.lerp(targetPosition, lerpFactor);
    camera.lookAt(new THREE.Vector3(0, 10, -30));
  });
}

function GameStart() {
  return (
    <Canvas camera={{ near: 0.1, far: 1000, position: [25, 10, 30], fov: 75 }}>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <TutorialBackground />
      <Sphere position={[-2, 3, 8]} args={[3]} color="red" />
      <mesh position={[-2, 0.1, 8]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <AnimateCamera />
    </Canvas>
  );
}

export default GameStart;
