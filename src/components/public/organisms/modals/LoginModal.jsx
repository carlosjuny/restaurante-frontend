import styled from 'styled-components';
import PropsTypes from 'prop-types'
import Modal from '../../molecules/Modal';
import ModalClose from '../../atoms/ModalClose';
import Button from '../../atoms/Button';
import InputForm from '../../atoms/InputForm'
import Image from '../../atoms/Image'
import loginModalImg from '../../../../assets/images/public/login_modal.jpg';
import LinkNavigate from '../../atoms/LinkNavigate';
import { Link } from 'react-router-dom';

const ModalFormStyle = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  /* margin: auto; */
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;

  input {
    position: relative;
    width: 380px;
    /* left: 10px; */
    margin-bottom: 10px;
    color: #32312C;
  }

  img {
      position: sticky !important;
      width: 400px !important;
      height: 267px;
      box-shadow: none;
      margin-bottom: 50px;
      border-top-left-radius: 5px;
  }

  .navigate {
    position: relative;
    /* justify-content: space-around; */
    display: flex;
    margin: auto;
    align-items: center;
    flex-direction: column;
  }
`;

const ButtonStyle = styled(Button)`
  position: relative;
  background-color: #32312C;
  color: #FFFFFF;
  top: -10px;
  left: 0;
  width: 380px;
  margin-bottom: 5px;
`

const LoginModal = ({ onSubmit, children, onClose, openRegisterModal  }) => {
  return (
    <Modal>
    <ModalFormStyle onSubmit={onSubmit}>
      <Image img={loginModalImg} alt="Login Modal" className='ModalImg'/>
      <ModalClose onClick={onClose} />
      <InputForm placeholder='Correo'/>
      <InputForm placeholder='Contraseña'/>
      {children}
      <div className='navigate'>
      <ButtonStyle type="submit"><Link to='admin'>Acceder</Link></ButtonStyle>
        <span>¿No tienes cuenta? <LinkNavigate to='RegisterModal' onClick={openRegisterModal}>Registrate</LinkNavigate></span>
      </div>
    </ModalFormStyle>
    </Modal>
  );
};

LoginModal.propTypes = {
    onSubmit: PropsTypes.func.isRequired,
    children: PropsTypes.node.isRequired,
    onClose: PropsTypes.func.isRequired,
    openRegisterModal: PropsTypes.func.isRequired
}

export default LoginModal;
