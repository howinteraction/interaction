import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStage } from "../../redux/stageSlice";
import { setIsStageCleared } from "../../redux/stageClearSlice";

import {
  ModalContent,
  ScoreModal,
  StyledList,
  ListItem,
  Divider,
  Rank,
  RankListContainer,
  SubmitButton,
  PlayAgainButton,
} from "../Styles";

export default function ScoreBoard() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [sessions, setSessions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedSessions = localStorage.getItem("gameSessions");

    if (storedSessions) {
      const filteredSessions = JSON.parse(storedSessions).filter(
        (session) => session.endTime !== null,
      );

      filteredSessions.sort((a, b) => a.totalSeconds - b.totalSeconds);
      setSessions(filteredSessions);
    }
  }, []);

  function handleNewPlayerButton() {
    dispatch(setStage(0));
    dispatch(setIsStageCleared(false));
    setIsModalVisible(false);
  }

  function calculateTotalTime(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const totalMilliseconds = end - start;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}분 ${seconds}초`;
  }

  function handlePlayAgainButton() {
    const startTime = new Date().toISOString();
    const storedTime = localStorage.getItem("gameSessions");
    const newSessions = storedTime ? JSON.parse(storedTime) : [];
    const lastSession = newSessions[newSessions.length - 1];
    const lastPlayerName = lastSession.playerName;

    newSessions.push({ playerName: lastPlayerName, startTime, endTime: null });
    localStorage.setItem("gameSessions", JSON.stringify(newSessions));

    dispatch(setStage(1));
    dispatch(setIsStageCleared(false));
    setIsModalVisible(false);
  }

  return (
    <ScoreModal $show={isModalVisible}>
      <ModalContent>
        <h2>Game Records</h2>
        <RankListContainer>
          <StyledList>
            {sessions.map((session, index) => (
              <ListItem key={session.startTime}>
                <Rank>{index + 1}</Rank>
                <span>{`Player: ${session.playerName}`}</span>
                <Divider />
                <span>{`Play time: ${calculateTotalTime(session.startTime, session.endTime)}`}</span>
              </ListItem>
            ))}
          </StyledList>
        </RankListContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <SubmitButton onClick={handleNewPlayerButton}>
            new player
          </SubmitButton>
          <PlayAgainButton onClick={handlePlayAgainButton}>
            play again
          </PlayAgainButton>
        </div>
      </ModalContent>
    </ScoreModal>
  );
}
