import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Modal = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Alerta</h2>
        <p>{message}</p>
        <CloseButton onClick={onClose}>Cerrar</CloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
