import { useState } from "react";
import { Sky } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { RigidBody, Physics } from "@react-three/rapier";
import { useDrag  } from "@use-gesture/react";

import TutorialSign from "../TutorialSign";

import TutorialBackground from "../models/TutorialBackground";
import Sphere from "../models/Sphere";

function Tutorial() {
  const [position, setPosition] = useState([8, 2.9, 5]);
  const [isDropping, setIsDropping] = useState(false);
  const { size, viewport } = useThree();

  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ delta: [x, y], down }) => {
      const [, , z] = position;

      if (down) {
        setPosition((prev) => [prev[0] + x / aspect, prev[1] - y / aspect, z]);
      } else {
        setIsDropping(true);
      }
    },
  );

  useFrame(() => {
    if (isDropping) {
      const [currentX, currentY, currentZ] = position;
      const descentVelocity = 0.4;

      setPosition([currentX, currentY - descentVelocity, currentZ]);

      if (position[1] < 3.6) {
        setIsDropping(false);

        if (currentX > -4 && currentX < 1) {
          console.log("Tutorial Clear!");
        }
      }
    }
  });

  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1} />
      <Physics>
        <TutorialBackground />
        <TutorialSign />
        <RigidBody type="dynamic" colliders={false} >
          <Sphere
            position={position}
            color="red"
            args={[3]}
            {...bind()}
          />
        </RigidBody>
        <mesh position={[-2, 0, 5]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Physics>
    </>
  );
}

export default Tutorial;
