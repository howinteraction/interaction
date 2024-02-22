import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { RigidBody, Physics } from "@react-three/rapier";

import CameraMotion from "../CameraMotion";
import GameStart from "../GameStart";

import Logo from "../models/Tutorial/Logo";
import TutorialBackground from "../models/Tutorial/TutorialBackground";
import TutorialTitle from "../models/Tutorial/TutorialTitle";
import Plane from "../models/Tutorial/Plane";

import HexSphereWithDrag from "../HexSphereWithDrag";

export default function Tutorial() {
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );

  return (
    <>
      <Canvas camera={{ near: 0.1, far: 1000, position: [0, 7, 23], fov: 80 }}>
        <ambientLight intensity={2} />
        <Physics>
          <TutorialBackground />
          <TutorialTitle />
          <RigidBody>
            <HexSphereWithDrag />
          </RigidBody>
          <Plane
            position={[-2, 0.01, 5]}
            rotateX={-Math.PI / 2}
            rotateY={0}
            color="green"
            args={[8, 8]}
          />
        </Physics>
        {isStageCleared && (
          <CameraMotion
            targetPosition={[60, 10, 0]}
            lerpFactor={0.01}
            targetDirection={[0, 15, 0]}
          />
        )}
        <Logo
          position={[35, 24, 0]}
          scale={[20, 10, 0]}
          rotation={[0.33, 1.5, -0.35]}
        />
      </Canvas>
      {isStageCleared && <GameStart />}
    </>
  );
}
