import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const isClear = useSelector((state) => state.tutorial.isClear);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  useEffect(() => {
    setIsRunning(isClear);

    if (isClear) {
      setElapsedTime(0);
    }
  }, [isClear]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Text
      position={[23, 14, 1]}
      color="black"
      fontSize={2.5}
      lineHeight={0.05}
      textAlign="center"
      rotation={[6, 0, 0]}
    >
      {formatTime(elapsedTime)}
    </Text>
  );
}
