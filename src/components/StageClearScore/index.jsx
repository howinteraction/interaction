import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ScoreBoard from "../ScoreBoard";
import { ScoreModal, ModalContent, SubmitButton, Light } from "../Styles";
import { setElapsedTime } from "../../redux/elapsedSlice";

export default function StageClearScore() {
  const [totalTime, setTotalTime] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isScoreBoardVisible, setIsScoreBoardVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const endTime = new Date().toISOString();
    const storedTime = localStorage.getItem("gameSessions");
    const sessions = storedTime ? JSON.parse(storedTime) : [];

    if (sessions.length > 0) {
      const lastSession = sessions[sessions.length - 1];

      lastSession.endTime = endTime;

      const startTime = new Date(lastSession.startTime);
      const endTimeDate = new Date(endTime);
      const totalMilliseconds = endTimeDate - startTime;
      const totalSeconds = Math.floor(totalMilliseconds / 1000);

      lastSession.totalSeconds = totalSeconds;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setTotalTime(`${minutes}분 ${seconds}초`);
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
