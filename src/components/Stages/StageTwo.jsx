import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";

import { Aim } from "../Styles";
import Player from "../Player";
import DragControl from "../DragControl";
import VisualIllusion from "../VisualIllusion";
import Stopwatch from "../Stopwatch";
import StageClearModal from "../StageClearModal";

import StageTwoSky from "../models/StageTwo/StageTwoSky";
import Fog from "../models/StageTwo/Fog";
import StageTwoBackground from "../models/StageTwo/StageTwoBackground";
import StageTwoGoal from "../models/StageTwo/StageTwoGoal";
import HelperScreen from "../models/StageTwo/HelperScreen";
import TimeScreen from "../models/StageTwo/TimeScreen";
import Cube from "../models/StageTwo/Cube";
import BlackColumn from "../models/StageTwo/BlackColumn";
import BlackPillar from "../models/StageTwo/BlackPillar";
import BlackPillar2 from "../models/StageTwo/BlackPillar2";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageTwo() {
  const controlsRef = useRef();
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const [isCollided, setIsCollided] = useState(false);
  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);

  return (
    <>
      <Aim />
      <Canvas shadows>
        <StageTwoSky />
        <Fog />
        <ambientLight intensity={3} />
        <directionalLight
          castShadow
          intensity={5}
          position={[0, 100, 0]}
          shadow-mapSize-width={4096}
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
            minX={-60}
            maxX={49}
            maxY={30}
            minZ={-5}
            maxZ={6}
            controlsRef={controlsRef}
          />
          <RigidBody type="fixed" colliders={false} scale={2}>
            <StageTwoBackground isCollided={isCollided} />
          </RigidBody>
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[-48, 0, 0]}
            scale={0.5}
          >
            <Cube />
          </RigidBody>
          <RigidBody
            scale={5}
            colliders={false}
            rotation={[0, 0, 0]}
            position={[-40.5, 3, 0.5]}
          >
            <TimeScreen />
          </RigidBody>
          <RigidBody
            scale={4}
            colliders={false}
            rotation={[-0.017, -0.01, 0]}
            position={[-62, -4, 0.3]}
          >
            <HelperScreen />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-30, 0, 3.5]}
            rotation={[0, -20, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-25, 0, -2.4]}
            rotation={[0, 45, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-18, 0, 4]}
            rotation={[0, Math.PI / 10, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-17, 0, -4]}
            rotation={[0, 20, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-7, 0, 3]}
            rotation={[0, 13, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-13, 0, 0]}
            rotation={[0, 14, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            position={[10, 0, -2]}
            rotation={[0, -Math.PI / 2, 0]}
            colliders={false}
          >
            <BlackPillar />
            <CuboidCollider args={[1.5, 15, 1.5]} position={[0.5, 1, -0.3]} />
          </RigidBody>
          <RigidBody
            type="fixed"
            position={[10, 0, -2]}
            rotation={[0, -Math.PI / 2, 0]}
            colliders={false}
          >
            <BlackPillar />
            <CuboidCollider args={[1.5, 15, 1.5]} position={[0.5, 1, -0.3]} />
          </RigidBody>
          <RigidBody
            type="fixed"
            position={[24, 0, 4.3]}
            rotation={[0, 17.2, 0]}
            colliders={false}
          >
            <BlackPillar2 />
            <CuboidCollider args={[1.5, 15, 1.5]} position={[0.5, 1, -0.3]} />
          </RigidBody>
          <StageTwoGoal isCollided={isCollided} setIsCollided={setIsCollided} />
          <Player
            position={[-68.5, 0, 0.2]}
            onPositionChange={handlePlayerPositionChange}
          />
          <VisualIllusion />
        </Physics>
        <Stopwatch
          position={[-41.45, 13.7, 0.9]}
          rotation={[-0.5, 4.7, -0.5]}
          color="rgb(182, 45, 8)"
        />
      </Canvas>
      {isStageCleared && <StageClearModal nextStage={3} />}
    </>
  );
}
