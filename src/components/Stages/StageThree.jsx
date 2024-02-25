import { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { resetIllusions } from "../../redux/threeIllusionSlice";

import { Aim } from "../Styles";

import StageThreeSky from "../models/StageThree/StageThreeSky";
import StageThreeBackGround from "../models/StageThree/StageThreeBackGround";
import StageThreeStone from "../models/StageThree/StageThreeStone";
import StageThreeShip from "../models/StageThree/StageThreeShip";
import StageThreeCloud from "../models/StageThree/StageThreeCloud";
import StageHayStack from "../models/StageThree/StageThreeHayStack";
import StageThreeBridge from "../models/StageThree/StageThreeBridge";

import StageThreeBridge2dReal from "../models/StageThree/StageThreeBridge2dReal";
import StageThreeBridge2d from "../models/StageThree/StageThreeBridge2d";
import StageThreeHaytack2d from "../models/StageThree/StageThreeHaytack2d";
import StageThreeColumn2d from "../models/StageThree/StageThreeColumn2d";
import StageThreeColumnLong2d from "../models/StageThree/StageThreeColumnLong2d";
import StageThreeMetalColumnLong2d from "../models/StageThree/StageThreeMetalColumnLong2d";
import StageThreeMetalColumn2d from "../models/StageThree/StageThreeMetalColumn2d";

import Player from "../Player";
import DragControl from "../DragControl";
import Stopwatch from "../Stopwatch";
import StageClearScore from "../StageClearScore";
import StageThreeLoading from "../Loading/StageThreeLoading";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageThree() {
  const controlsRef = useRef();
  const [playerPosition, setPlayerPosition] = useState([-19, -17, 21]);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const { handlePlayerPositionChange } = usePlayerPosition(controlsRef);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 10000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (isStageCleared) {
      dispatch(resetIllusions());
    }
  }, [isStageCleared, dispatch]);

  return (
    <>
      {!isStageCleared && <Aim />}
      {!loadingComplete ? (
        <StageThreeLoading />
      ) : (
        <Suspense fallback={<StageThreeLoading />}>
          <Canvas shadows>
            <ambientLight intensity={3} />
            <StageThreeCloud />
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
            <Physics debug>
              <DragControl
                minX={-200}
                maxX={200}
                maxY={200}
                minZ={-200}
                maxZ={200}
                controlsRef={controlsRef}
              />
              <RigidBody type="fixed" colliders={false} scale={1.5}>
                <StageThreeSky />
              </RigidBody>
              <RigidBody type="fixed" colliders="hull" scale={0.2}>
                <StageThreeBackGround />
              </RigidBody>
              <StageThreeShip />
              <StageHayStack />
              <StageThreeHaytack2d />
              <StageThreeBridge2d />
              <StageThreeBridge2dReal />
              <StageThreeColumn2d />
              <StageThreeColumnLong2d />
              <StageThreeMetalColumnLong2d />
              <StageThreeMetalColumn2d />
              <StageThreeBridge />
              <RigidBody
                type="fixed"
                colliders="hull"
                scale={0.1}
                position={[17, -10, -22]}
                rotation={[0, 3.5, 0]}
              >
                <StageThreeStone />
              </RigidBody>
              <RigidBody
                type="fixed"
                colliders="hull"
                scale={0.1}
                position={[25, -1, -14]}
                rotation={[0, 6.5, 0]}
              >
                <StageThreeStone />
              </RigidBody>
              <RigidBody
                type="fixed"
                colliders="hull"
                scale={0.1}
                position={[10, 7, -20]}
                rotation={[0, 5, 0]}
              >
                <StageThreeStone />
              </RigidBody>
              <RigidBody
                type="fixed"
                colliders="hull"
                scale={0.1}
                position={[15, 15, -30]}
                rotation={[0, 4, 0]}
              >
                <StageThreeStone />
              </RigidBody>
              <Stopwatch
                position={[94, 45, -18.3]}
                rotation={[-0.5, 4.7, -0.5]}
                color="rgb(135, 206, 235)"
              />
              <Player
                position={playerPosition}
                onPositionChange={handlePlayerPositionChange}
              />
            </Physics>
          </Canvas>
        </Suspense>
      )}
      {isStageCleared && <StageClearScore />}
    </>
  );
}
