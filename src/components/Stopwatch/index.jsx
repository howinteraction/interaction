import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";
import { useSelector } from "react-redux";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const isClear = useSelector(state => state.tutorial.isClear);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
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

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Text
      position={[23, 14, 1]}
      color="black"
      fontSize={4}
      lineHeight={0.02}
      textAlign="center"
    >
      {formatTime(elapsedTime)}
    </Text>
  );
}
