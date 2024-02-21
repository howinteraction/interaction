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
        position={[35, 23, 0]}
        scale={[25, 15, 0]}
        rotation={[0.33, 1.5, -0.35]}
      />
      <InputInterface
        position={[35, 14, 0]}
        rotation={[0.6, 1.6, -0.59]}
        width="500px"
        height="150px"
        fontSize="80px"
        errorMessage={error}
        onChange={handleInputChange}
      />
      <CuboidButton
        position={[35, 7, 0]}
        args={[12, 3, 3]}
        rotation={[11.05, 5, -7.8]}
        onClick={(event) => {
          event.stopPropagation();
          handleButtonClick();
        }}
        color="blue"
        text="Start Button"
      />
    </>
  );
}
