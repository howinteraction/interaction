import { useState, useEffect, useRef, Suspense } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

import Player from "../Player";
import DragControl from "../DragControl";
import Stopwatch from "../Stopwatch";
import SubTitle from "../Subtitle";
import RenderingContents from "../ClearStateRenderer";
import Loading from "../Loading";
import CameraMotion from "../CameraMotion";

import HexSphere from "../models/StageOne/HexSphere";
import HallowCube from "../models/StageOne/HallowCube";
import Box from "../models/StageOne/Box";
import Capsule from "../models/StageOne/Capsule";
import Cylinder from "../models/StageOne/Cylinder";
import Torus from "../models/StageOne/Torus";
import Cone from "../models/StageOne/Cone";
import StageOneTimeScreen from "../models/StageOne/StageOneTimeScreen";
import StageOnePortal from "../models/StageOne/StageOnePortal";
import TutorialBackground from "../models/Tutorial/TutorialBackground";
import BlackHole from "../models/StageOne/BlackHole";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageOne() {
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const controlsRef = useRef();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [boxSize, setBoxSize] = useState(2);

  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 7000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return !loadingComplete ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <ambientLight intensity={1.8} />
        <directionalLight
          castShadow
          intensity={2}
          position={[-120, 45, 10]}
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
          {!isStageCleared && (
            <DragControl
              minX={-46}
              maxX={46}
              maxY={29}
              minZ={-21.5}
              maxZ={21.5}
              boxSize={boxSize}
              setBoxSize={setBoxSize}
              controlsRef={controlsRef}
            />
          )}
          <RigidBody type="fixed" colliders={false}>
            <TutorialBackground />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[10, 2.8, 2]}
            scale={0.3}
          >
            <HexSphere />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[15, 2.8, -8]}
          >
            <HallowCube />
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
            lockRotations
            position={[6, 2.7, -3]}
            scale={0.5}
          >
            <Capsule args={[1, 1, 4, 8]} color="yellow" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[-1, 2.6, -8]}
            scale={0.5}
          >
            <Cylinder args={[0.5, 0.5, 1.5, 16]} color="orange" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            position={[3, 1.25, 6]}
            scale={0.5}
          >
            <Torus args={[1, 0.25, 8, 50]} color="green" />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            scale={0.5}
            position={[-6, 2, 5]}
          >
            <Cone />
          </RigidBody>
          <RigidBody
            scale={10}
            colliders={false}
            rotation={[0, 0, 0]}
            position={[-15, -5, 0.3]}
          >
            <StageOneTimeScreen />
          </RigidBody>
          <StageOnePortal scale={2} rotation={[0, Math.PI / 2, 0]} />
          <BlackHole position={[450, 20, 0]} rotation={[0, 0, Math.PI / 2]} />
          {isStageCleared ? (
            <CameraMotion
              targetPosition={[450, 20, 0]}
              lerpFactor={0.02}
              targetDirection={[450, 20, 0]}
            />
          ) : (
            <Player onPositionChange={handlePlayerPositionChange} />
          )}
        </Physics>
        <Stopwatch
          position={[-16.2, 16.5, 1]}
          rotation={[0.2, 7.83, -0.2]}
          color="rgb(182, 45, 8)"
        />
        <SubTitle
          position={[1, 12, -18]}
          rotation={[19, 6.3, 0]}
          subtitle="Drop the Object top to Bottom"
        />
      </Canvas>
      <RenderingContents isStageCleared={isStageCleared} nextStage={2} />
    </Suspense>
  );
}
