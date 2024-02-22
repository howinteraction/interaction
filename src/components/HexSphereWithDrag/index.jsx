import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useDispatch } from "react-redux";
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from "prop-types";

import HexSphere from "../models/StageOne/HexSphere";
import { setIsStageCleared } from "../../redux/stageClearSlice";
import { DESCENT_VELOCITY } from "../../utils/constants";

export default function HexSphereWithDrag({ initialPosition }) {
  const dispatch = useDispatch();

  function checkTutorialClear(positionX) {
    const leftToleranceRange = -4;
    const rightToleranceRange = 1;

    return positionX > leftToleranceRange && positionX < rightToleranceRange;
  }

  const [position, setPosition] = useState(initialPosition);
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

  return <HexSphere position={position} {...bind()} />;
}

HexSphereWithDrag.propTypes = {
  initialPosition: PropTypes.arrayOf(PropTypes.number),
};

HexSphereWithDrag.defaultProps = {
  initialPosition: [8, 2.9, 5],
};
