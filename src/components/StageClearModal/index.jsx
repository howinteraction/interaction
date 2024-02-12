import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

export default function StageClearModal({ onClose }) {
  function handleModalClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <ModalContainer onClick={handleModalClick}>
      <ModalContent>
        <h2>Congratulations!</h2>
        <p>You have cleared the stage. Would you like to play next stage?</p>
        <CloseButton onClick={onClose}>Next Stage</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};
