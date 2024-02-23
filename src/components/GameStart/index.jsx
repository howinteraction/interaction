import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStage } from "../../redux/stageSlice";
import { setIsStageCleared } from "../../redux/stageClearSlice";

import {
  Modal,
  ModalContent,
  Input,
  ErrorMessage,
  SubmitButton,
  Light,
} from "../Styles";

export default function GameStart() {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const dispatch = useDispatch();
  const checkUserInputRegExp = /^[가-힣a-zA-Z0-9]{2,10}$/.test(playerName);

  function handleButtonClick() {
    if (!checkUserInputRegExp) {
      setError(
        "이름은 한글, 영어, 숫자 혼용 2글자 이상 10글자 이하여야 합니다.",
      );

      return;
    }

    const startTime = new Date().toISOString();
    const storedTime = localStorage.getItem("gameSessions");
    const sessions = storedTime ? JSON.parse(storedTime) : [];

    sessions.push({ playerName, startTime, endTime: null });
    localStorage.setItem("gameSessions", JSON.stringify(sessions));

    setError("");
    dispatch(setStage(1));
    dispatch(setIsStageCleared(false));
    setIsModalVisible(false);
  }

  function handleInputChange(name) {
    setPlayerName(name);
    setError("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  }

  return (
    isModalVisible && (
      <Modal $show={isModalVisible}>
        <ModalContent>
          <Input
            type="text"
            value={playerName}
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="이름을 입력하세요"
            $isError={!!error}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton onClick={handleButtonClick}>
            game start
            <Light />
          </SubmitButton>
        </ModalContent>
      </Modal>
    )
  );
}
