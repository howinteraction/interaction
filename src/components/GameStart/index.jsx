import { useState } from "react";

import Logo from "../models/Logo";
import CuboidButton from "../models/CuboidButton";
import InputInterface from "../InputInterface";

export default function GameStart() {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    if (/^[가-힣a-zA-Z0-9]{1,10}$/.test(playerName)) {
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
    } else {
      setError("이름은 한글, 영어, 숫자 혼용 10글자 이내여야 합니다.");
    }
  };

  const handleInputChange = name => {
    setPlayerName(name);

    if (name === "" || /^[가-힣a-zA-Z0-9]{1,10}$/.test(name)) {
      setError("");
    }
  };

  return (
    <>
      <Logo />
      <InputInterface errorMessage={error} onChange={handleInputChange} />
      <CuboidButton
        onClick={e => {
          e.stopPropagation();
          handleButtonClick();
        }}
      />
    </>
  );
}
