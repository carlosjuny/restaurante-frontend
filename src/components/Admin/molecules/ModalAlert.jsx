import styled from "styled-components";
import PropTypes from "prop-types";
import ModalClose from "../../public/atoms/ModalClose";
import Button from '../../public/atoms/Button';
import LinkNavigate from '../../public/atoms/LinkNavigate';
import IconSvg from '../../public/atoms/IconSvg';

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
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  position: relative;
  gap: 60px;

  .Button {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .ButtonModal {
    background-color: #2c2c2cf2;
    transition: all 0.5s;
    color: #FFFFFF;
  }
  .ButtonModal:hover {
    background-color: #F4D976;
    transition: all 0.5s;
    color: #2c2c2cf2;
    border: 1px solid #2c2c2cf2;
  }

  .ButtonClose {
    border: 1px solid #2c2c2cf2;
  }
`;

const AlertModal = ({ message, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose(); 
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        <div>
          <ModalClose onClick={onClose} />
          <IconSvg name='Warning' size='50'/>
          {/* <h2>Alerta</h2> */}
          <p>{message}</p>
        </div>
        <div className="Button">
          <LinkNavigate to='#'><Button className='ButtonModal' onClick={handleConfirm}>Si</Button></LinkNavigate>
          <LinkNavigate to='#'><Button className='ButtonClose' onClick={onClose}>No</Button></LinkNavigate>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

AlertModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default AlertModal;
