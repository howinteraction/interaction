import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStage } from "../../redux/stageSlice";
import { setIsStageCleared } from "../../redux/stageClearSlice";

import InputInterface from "../InputInterface";
import Logo from "../models/Tutorial/Logo";
import CuboidButton from "../models/Tutorial/CuboidButton";

export default function GameStart() {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const checkUserInputRegExp = /^[가-힣a-zA-Z0-9]{1,10}$/.test(playerName);

  function handleButtonClick() {
    if (!checkUserInputRegExp) {
      setError("이름은 한글, 영어, 숫자 혼용 10글자 이내여야 합니다.");
      return;
    }

    const startTime = new Date().toLocaleString();
    const startTimeList = [];
    const storedTime = localStorage.getItem("startTime");

    localStorage.setItem("playerName", playerName);

    if (storedTime) {
      const parsedTimeList = JSON.parse(storedTime);
      const sessionRecord = { [startTime]: "" };

      parsedTimeList.push(sessionRecord);
      localStorage.setItem("startTime", JSON.stringify(parsedTimeList));
    } else {
      startTimeList.push({ [startTime]: "" });
      localStorage.setItem("startTime", JSON.stringify(startTimeList));
    }

    setError("");
    dispatch(setStage(1));
    dispatch(setIsStageCleared(false));
  }

  function handleInputChange(name) {
    setPlayerName(name);

    if (name === "" || /^[가-힣a-zA-Z0-9]{1,10}$/.test(name)) {
      setError("");
    }
  }

  return (
    <>
      <Logo
        position={[10, 25, 10]}
        scale={[25, 15, 0]}
        rotation={[0.7, 0.7, -0.5]}
      />
      <InputInterface
        position={[10, 16, 10]}
        width="500px"
        height="150px"
        rotation={[0.6, 0.75, -0.42]}
        fontSize="80px"
        errorMessage={error}
        onChange={handleInputChange}
      />
      <CuboidButton
        args={[12, 3, 3]}
        position={[10, 10, 10]}
        rotation={[11, 18.85, -8.6]}
        onClick={(event) => {
          event.stopPropagation();
          handleButtonClick();
        }}
        color="Gold"
        text="Start Button"
      />
    </>
  );
}
