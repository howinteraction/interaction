import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import styled from "styled-components";

import Player from "../Player";
import DragControl from "../DragControl";

import StageTwoBackground from "../models/StageTwoBackground";
import StageTwoPortal from "../models/StageTwoPortal";
import Cube from "../models/Cube";
import Screen1 from "../models/Screen1";
import Screen2 from "../models/Screen2";
import BlackColumn from "../models/BlackColumn";
import Fog from "../models/Fog";
import Pillar from "../models/Pillar";
import Pillar2 from "../models/Pillar2";
import VisualIllusion from "../VisualIllusion";

const Aim = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 2px solid white;
  z-index: 2;
`;

export default function StageTwo() {
  const controlsRef = useRef();

  return (
    <>
      <Aim />
      <Canvas shadows>
        <Sky sunPosition={[30, 20, 30]} />
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
            scale={2}
            colliders={false}
            rotation={[0, 0, 0]}
            position={[0, -3, 0]}
          >
            <Screen1 />
          </RigidBody>
          <RigidBody
            scale={5}
            colliders={false}
            rotation={[0, 1.1, 0]}
            position={[-35, 3, 0.5]}
          >
            <Screen2 />
          </RigidBody>
          <RigidBody
            colliders={false}
            scale={0.4}
            position={[-30, 0, 2]}
            rotation={[0, 0.3, 0]}
          >
            <Pillar args={[5, 82, 5]} color="rgb(62, 60, 60)" />
          </RigidBody>
          <RigidBody
            colliders={false}
            scale={0.4}
            position={[-15, 0, 0.5]}
            rotation={[0, 0.3, 0]}
          >
            <Pillar2 args={[5, 82, 5]} color="rgb(62, 60, 60)" />
          </RigidBody>
          <RigidBody
            colliders={false}
            scale={0.4}
            position={[-30, 0, -4]}
            rotation={[0, Math.PI, 0]}
          >
            <BlackColumn />
          </RigidBody>
          <RigidBody
            position={[50, 4, 2]}
            scale={2}
            type="fixed"
            colliders={false}
            rotation={[0.53, 0, 1.5]}
          >
            <StageTwoPortal />
          </RigidBody>
          <Player position={[-66, 0, 0]} />
          <VisualIllusion />
        </Physics>
      </Canvas>
    </>
  );
}
