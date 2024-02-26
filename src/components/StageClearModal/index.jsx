import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import styled from "styled-components";

import { setStage } from "../../redux/stageSlice";
import { setIsStageCleared } from "../../redux/stageClearSlice";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
`;

export default function StageClearModal({ nextStage }) {
  const dispatch = useDispatch();

  function handleModalClick() {
    dispatch(setIsStageCleared(false));
    dispatch(setStage(nextStage));
  }

  return (
    <ModalContainer onClick={handleModalClick}>
      <ModalContent>
        <h2>Congratulations!</h2>
        <p>You have cleared the stage. Would you like to play next stage?</p>
        <CloseButton onClick={handleModalClick}>Next Stage</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
}

StageClearModal.propTypes = {
  nextStage: PropTypes.number.isRequired,
};
