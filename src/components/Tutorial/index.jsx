import { PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "../models/Sphere";

import TutorialSign from "../TutorialSign";

import TutorialBackground from "../models/TutorialBackground";

function Tutorial() {
  return (
    <Canvas camera={{ near: 0.1, far: 1000, position: [25, 10, 30], fov: 75 }}>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <TutorialBackground />
      <TutorialSign />
      <Sphere />
      <mesh position={[-2, 2, 8]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </Canvas>
  );
}

export default Tutorial;
