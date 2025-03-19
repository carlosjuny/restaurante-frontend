import styled from 'styled-components';
import PropTypes from 'prop-types'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.74);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  border-top-right-radius: 0px;
  /* position: relative; */
  display: flex;
  width: 400px;
  height: 530px;
  flex-direction: column;
`;

const Modal = ({ children, className}) => {
  return (
    <ModalBackground>
      <ModalContainer className={className}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Modal;
