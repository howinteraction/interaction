import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "@react-three/drei";
import PropTypes from "prop-types";

import { setElapsedTime } from "../../redux/elapsedSlice";

export default function Stopwatch({ position, rotation, color }) {
  const dispatch = useDispatch();
  const elapsedTime = useSelector((state) => state.elapsedTimer.elapsedTime);
  const isStageCleared = useSelector(
    (state) => state.stageClear.isStageCleared,
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        const nextElapsedTime = elapsedTime + 1;

        dispatch(setElapsedTime(nextElapsedTime));
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, elapsedTime]);

  useEffect(() => {
    if (!isStageCleared) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  }, [isStageCleared]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Text
      position={position}
      color={color}
      fontSize={2.6}
      lineHeight={0.05}
      textAlign="center"
      rotation={rotation}
    >
      {formatTime(elapsedTime)}
    </Text>
  );
}

Stopwatch.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string,
};

Stopwatch.defaultProps = {
  color: "black",
};
