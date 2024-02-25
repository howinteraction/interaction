import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ScoreModal, ModalContent, SubmitButton, Light } from "../Styles";

import { setElapsedTime } from "../../redux/elapsedSlice";
import ScoreBoard from "../ScoreBoard";

export default function StageClearScore() {
  const [totalTime, setTotalTime] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isScoreBoardVisible, setIsScoreBoardVisible] = useState(false);
  const elapsedTime = useSelector((state) => state.elapsedTimer.elapsedTime);
  const dispatch = useDispatch();

  useEffect(() => {
    const endTime = new Date().toISOString();
    const storedTime = localStorage.getItem("gameSessions");
    const sessions = storedTime ? JSON.parse(storedTime) : [];

    if (sessions.length > 0) {
      const lastSession = sessions[sessions.length - 1];
      lastSession.endTime = endTime;
      const totalSeconds = elapsedTime;
      lastSession.totalSeconds = totalSeconds;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setTotalTime(
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      );

      localStorage.setItem("gameSessions", JSON.stringify(sessions));
    }
  }, []);

  function handleShowRecords() {
    setIsScoreBoardVisible(true);
    setIsModalVisible(false);
    dispatch(setElapsedTime(0));
  }

  return (
    <>
      <ScoreModal $show={isModalVisible}>
        <ModalContent>
          <h2>playtime: {totalTime}</h2>
          <SubmitButton onClick={handleShowRecords}>
            show records
            <Light />
          </SubmitButton>
        </ModalContent>
      </ScoreModal>
      {isScoreBoardVisible && <ScoreBoard />}
    </>
  );
}
