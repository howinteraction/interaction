import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useThree, useFrame } from "@react-three/fiber";
import { RigidBody, Physics } from "@react-three/rapier";
import { Sky } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";

import CameraMotion from "../CameraMotion";
import GameStart from "../GameStart";

import TutorialBackground from "../models/TutorialBackground";
import TutorialTitle from "../models/TutorialTitle";
import Sphere from "../models/Sphere";
import Plane from "../models/Plane";

import { setIsStageCleared } from "../../redux/stageClearSlice";
import { DESCENT_VELOCITY } from "../../utils/constants";

export default function Tutorial() {
  const dispatch = useDispatch();
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const [position, setPosition] = useState([8, 2.9, 5]);
  const [isDropping, setIsDropping] = useState(false);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(({ delta: [x, y], down }) => {
    const [, , z] = position;

    if (down) {
      if (position[0] < -19) {
        setPosition((prev) => [-19, prev[1] - y / aspect, z]);
      } else if (position[1] < 3.6) {
        setPosition((prev) => [prev[0] + x / aspect, 3.6, z]);
      } else {
        setPosition((prev) => [prev[0] + x / aspect, prev[1] - y / aspect, z]);
      }
    } else {
      setIsDropping(true);
    }
  });

  function checkTutorialClear(x) {
    const leftToleranceRange = -4;
    const rightToleranceRange = 1;

    return x > leftToleranceRange && x < rightToleranceRange;
  }

  useFrame(() => {
    if (isDropping) {
      const [currentX, currentY, currentZ] = position;
      const sphereRadius = 3;
      const groundToleranceRange = 0.6;

      setPosition([currentX, currentY - DESCENT_VELOCITY, currentZ]);

      const isReachedGround =
        currentY - DESCENT_VELOCITY < sphereRadius + groundToleranceRange;

      if (isReachedGround) {
        setIsDropping(false);

        if (checkTutorialClear(currentX)) {
          dispatch(setIsStageCleared(true));
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
        <TutorialTitle />
        <RigidBody>
          <Sphere position={position} color="red" args={[3]} {...bind()} />
        </RigidBody>
        <Plane
          position={[-2, 0.01, 5]}
          rotateX={-Math.PI / 2}
          color="green"
          args={[8, 8]}
        />
      </Physics>
      {isStageCleared && (
        <>
          <CameraMotion
            targetPosition={[30, 10, 30]}
            lerpFactor={0.01}
            targetDirection={[0, 15, 0]}
          />
          <GameStart />
        </>
      )}
    </>
  );
}