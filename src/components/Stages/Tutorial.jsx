import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useThree, useFrame } from "@react-three/fiber";
import { RigidBody, Physics } from "@react-three/rapier";
import { useDrag } from "@use-gesture/react";

import CameraMotion from "../CameraMotion";
import GameStart from "../GameStart";

import TutorialBackground from "../models/Tutorial/TutorialBackground";
import Galaxy from "../models/StageOne/Galaxy";
import TutorialTitle from "../models/Tutorial/TutorialTitle";
import Plane from "../models/Tutorial/Plane";
import HexSphere from "../models/StageOne/HexSphere";

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
    const dragToWallAllowance = -19;
    const dragToGroundAllowance = 3.6;

    if (down) {
      if (position[0] < dragToWallAllowance) {
        setPosition((prev) => [dragToWallAllowance, prev[1] - y / aspect, z]);
      } else if (position[1] < dragToGroundAllowance) {
        setPosition((prev) => [prev[0] + x / aspect, dragToGroundAllowance, z]);
      } else {
        setPosition((prev) => [prev[0] + x / aspect, prev[1] - y / aspect, z]);
      }
    } else {
      setIsDropping(true);
    }
  });

  function checkTutorialClear(positionX) {
    const leftToleranceRange = -4;
    const rightToleranceRange = 1;

    return positionX > leftToleranceRange && positionX < rightToleranceRange;
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
      <Galaxy />
      <ambientLight intensity={2} />
      <Physics>
        <TutorialBackground />
        <TutorialTitle />
        <RigidBody>
          <HexSphere position={position} {...bind()} />
        </RigidBody>
        <Plane
          position={[-2, 0.01, 5]}
          rotateX={-Math.PI / 2}
          rotateY={0}
          color="green"
          args={[8, 8]}
        />
      </Physics>
      {isStageCleared && (
        <>
          <CameraMotion
            targetPosition={[60, 10, 0]}
            lerpFactor={0.01}
            targetDirection={[0, 15, 0]}
          />
          <GameStart />
        </>
      )}
    </>
  );
}
