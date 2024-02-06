import { useEffect, useState } from "react";

export default function usePlayerControl() {
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
  };

  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  const setMovementStatus = (code, status) => {
    setMovement((move) => ({ ...move, [code]: status }));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      setMovementStatus(moveFieldByKey(event.code), true);
    };

    const handleKeyUp = (event) => {
      setMovementStatus(moveFieldByKey(event.code), false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
}
