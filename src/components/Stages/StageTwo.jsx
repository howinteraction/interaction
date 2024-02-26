import { useState, Suspense, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Text } from "@react-three/drei";
import { resetIllusions } from "../../redux/twoIllusionSlice";

import Player from "../Player";
import DragControl from "../DragControl";
import VisualIllusion from "../VisualIllusion";
import Stopwatch from "../Stopwatch";
import RenderingContents from "../ClearStateRenderer";
import Loading from "../Loading";

import StageTwoSky from "../models/StageTwo/StageTwoSky";
import Fog from "../models/StageTwo/Fog";
import StageTwoBackground from "../models/StageTwo/StageTwoBackground";
import StageTwoGoal from "../models/StageTwo/StageTwoGoal";
import HelperScreen from "../models/StageTwo/HelperScreen";
import TimeScreen from "../models/StageTwo/TimeScreen";
import Screen1 from "../models/StageTwo/Screen1";
import Cube from "../models/StageTwo/Cube";
import BlackColumn from "../models/StageTwo/BlackColumn";
import BlackPillar from "../models/StageTwo/BlackPillar";
import BlackPillar2 from "../models/StageTwo/BlackPillar2";

import StageTwoSquare2dRight from "../models/StageTwo/StageTwoSquare2dRight";
import StageTwoSquare2dLeft from "../models/StageTwo/StageTwoSquare2dLeft";
import StageTwoCircle2dRight from "../models/StageTwo/StageTwoCircle2dRight";
import StageTwoCircle2dLeft from "../models/StageTwo/StageTwoCircle2dLeft";
import StageTwoOctagon2dRight from "../models/StageTwo/StageTwoOctagon2dRight";
import StageTwoOctagon2dLeft from "../models/StageTwo/StageTwoOctagon2dLeft";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageTwo() {
  const controlsRef = useRef();
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);
  const dispatch = useDispatch();

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 7000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (isStageCleared) {
      dispatch(resetIllusions());
    }
  }, [isStageCleared, dispatch]);

  return !loadingComplete ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
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
            <StageTwoBackground />
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
            rotation={[0, 2, 0]}
            scale={3}
            colliders={false}
            position={[-48.5, -3, -7]}
          >
            <Screen1 />
          </RigidBody>
          <RigidBody
            colliders={false}
            position={[-49, 6, -6.2]}
            scale={0.5}
            rotation={[0, 0, 0]}
          >
            <Text color="white">Find this Triangle</Text>
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
            scale={0.25}
            position={[-30, 0, 2.5]}
            rotation={[0, -20, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody position={[-30.3, 8.5, 1.92]} rotation={[0, 0.35, 0]}>
            <StageTwoSquare2dRight />
          </RigidBody>
          <RigidBody position={[-18.7, 7.5, 5.2]} rotation={[0, 1.9, 0]}>
            <StageTwoSquare2dLeft />
          </RigidBody>
          <RigidBody position={[-14, 4, 0.5]} rotation={[0, 1.5, 0]}>
            <StageTwoCircle2dRight />
          </RigidBody>
          <RigidBody position={[-25.433, 6.75, -1.2]} rotation={[0, 2.5, 0]}>
            <StageTwoCircle2dLeft />
          </RigidBody>
          <RigidBody position={[-5.6, 7, 3]} rotation={[0, 2, 0]}>
            <StageTwoOctagon2dRight />
          </RigidBody>
          <RigidBody position={[-17.2, 9, -3.25]} rotation={[0, 2.8, 0]}>
            <StageTwoOctagon2dLeft />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.25}
            position={[-25, 0, -1.7]}
            rotation={[0, 45, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.25}
            position={[-18, 0, 5]}
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
            position={[-5, 0, 2.5]}
            rotation={[0, 13, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            type="fixed"
            colliders={false}
            scale={0.3}
            position={[-13, 0, 0.65]}
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
          <StageTwoGoal />
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
      <RenderingContents isStageCleared={isStageCleared} nextStage={3} />
    </Suspense>
  );
}
