import { Canvas } from "@react-three/fiber";
import { PointerLockControls, Sky } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import Sphere from "../models/Sphere";
import Box from "../models/Box";
import Capsule from "../models/Capsule";
import Cylinder from "../models/Cylinder";
import Torus from "../models/Torus";
import Cone from "../models/Cone";
import Plane from "../models/Plane";

import TutorialBackground from "../models/TutorialBackground";
import Player from "../Player";

import Stopwatch from "../Stopwatch";
import SubTitle from "../Subtitle";

export default function StageOne() {
  return (
    <Canvas>
        <PointerLockControls />
        <Sky sunPosition={[0, 10, 5]} />
        <ambientLight intensity={1} />
        <Physics>
          <RigidBody colliders={false}>
            <TutorialBackground />
          </RigidBody>
          <RigidBody>
            <Sphere position={[10, 2.9, 2]} args={[1]} color="red" />
          </RigidBody>
          <RigidBody>
            <Box position={[-10, 2.8, -2]} args={[2, 2, 2]} color="blue" />
          </RigidBody>
          <RigidBody>
            <Capsule
              position={[6, 2.7, -3]}
              args={[1, 1, 4, 8]}
              color="yellow"
            />
          </RigidBody>
          <RigidBody>
            <Cylinder
              position={[-1, 2.6, -8]}
              args={[0.5, 0.5, 1.5, 16]}
              color="orange"
            />
          </RigidBody>
          <RigidBody>
            <Torus
              position={[3, 1.25, 6]}
              args={[1, 0.25, 8, 50]}
              color="green"
            />
          </RigidBody>
          <RigidBody>
            <Cone position={[-6, 2, 5]} args={[1, 2, 20]} color="purple" />
          </RigidBody>
          <Plane
            position={[-19.9, 20, 1]}
            rotateX={0}
            rotateY={1.55}
            color="black"
            args={[10, 10]}
          />
          <Player />
        </Physics>
        <Stopwatch position={[15, 24, -19.8]} rotation={[19, 6.3, 0]} />
        <SubTitle
          position={[1, 14, -18]}
          rotation={[19, 6.3, 0]}
          subtitle="Drop the Object top to Bottom"
        />
        <SubTitle
          position={[0.9, 8, -18]}
          rotation={[19, 6.3, 0]}
          subtitle="Please Click Screen to PlayGame"
        />
      </Canvas>
  );
}
