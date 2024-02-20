import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";

import Aim from "../Aim";
import Player from "../Player";
import DragControl from "../DragControl";

import StageThreeSky from "../models/StageThreeSky";
import StageThreeGround from "../models/StageThreeGround";
import StageThreeStone from "../models/StageThreeStone";
import StageThreeSheep from "../models/StageThreeSheep";
import StageThreeCloud from "../models/StageThreeCloud";

import usePlayerPosition from "../../../hooks/usePlayerPosition";

export default function StageThree() {
  const controlsRef = useRef();

  return (
    <>
      <Aim />
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
            <StageThreeGround />
          </RigidBody>
          <RigidBody type="fixed" scale={0.2} position={[25, -10, -10]}>
            <StageThreeSheep />
          </RigidBody>
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
          <RigidBody
            userData={{ isDraggable: true }}
            lockRotations
            position={[2, 3, 0]}
            scale={0.5}
          ></RigidBody>
          <Player position={[27.26, 26.76, -29.7]} />
        </Physics>
      </Canvas>
    </>
  );
}
