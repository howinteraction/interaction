import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Aim from "../Aim";
import Player from "../Player";
import DragControl from "../DragControl";
import Stopwatch from "../Stopwatch";
import SubTitle from "../Subtitle";
import StageClearModal from "../StageClearModal";

import Sphere from "../models/StageOne/Sphere";
import Box from "../models/StageOne/Box";
import Capsule from "../models/StageOne/Capsule";
import Cylinder from "../models/StageOne/Cylinder";
import Torus from "../models/StageOne/Torus";
import Cone from "../models/StageOne/Cone";
import StageOnePortal from "../models/StageOne/StageOnePortal";
import TutorialBackground from "../models/Tutorial/TutorialBackground";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageOne() {
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const [boxSize, setBoxSize] = useState(2);
  const controlsRef = useRef();

  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);

  return (
    <>
      <Aim />
      <Canvas shadows>
        <Sky sunPosition={[45, 30, 30]} />
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          intensity={1.7}
          position={[45, 30, 30]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={4096}
          shadow-camera-left={-200}
          shadow-camera-right={200}
          shadow-camera-top={200}
          shadow-camera-bottom={-200}
          shadow-camera-near={1}
          shadow-camera-far={1000}
        />
        <Physics>
          <DragControl
            minX={-19}
            maxX={19}
            maxY={29}
            minZ={-19}
            maxZ={19}
            boxSize={boxSize}
            setBoxSize={setBoxSize}
            controlsRef={controlsRef}
          />
          <RigidBody type="fixed" colliders={false}>
            <TutorialBackground />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[10, 2.9, 2]}
          >
            <Sphere args={[1]} color="red" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true, isPerspective: true }}
            lockRotations
            position={[-10, 2.8, -2]}
          >
            <Box args={[boxSize, boxSize, boxSize]} color="blue" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            position={[6, 2.7, -3]}
            lockRotations
          >
            <Capsule args={[1, 1, 4, 8]} color="yellow" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            position={[-1, 2.6, -8]}
            lockRotations
          >
            <Cylinder args={[0.5, 0.5, 1.5, 16]} color="orange" />
          </RigidBody>
          <RigidBody userData={{ isDraggable: true }} position={[3, 1.25, 6]}>
            <Torus args={[1, 0.25, 8, 50]} color="green" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            position={[-6, 2, 5]}
            lockRotations
          >
            <Cone args={[1, 2, 20]} color="purple" />
          </RigidBody>
          <StageOnePortal scale={2} rotation={[0, Math.PI / 2, 0]} />
          <Player onPositionChange={handlePlayerPositionChange} />
        </Physics>
        <Stopwatch position={[15, 24, -19.8]} rotation={[19, 6.3, 0]} />
        <SubTitle
          position={[1, 13.5, -18]}
          rotation={[19, 6.3, 0]}
          subtitle="Drop the Object top to Bottom"
        />
      </Canvas>
      {isStageCleared && <StageClearModal nextStage={2} />}
    </>
  );
}
