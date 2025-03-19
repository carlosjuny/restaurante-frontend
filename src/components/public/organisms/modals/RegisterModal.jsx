import styled from 'styled-components';
import PropsTypes from 'prop-types'
import Modal from '../../molecules/Modal';
import ModalClose from '../../atoms/ModalClose';
import Button from '../../atoms/Button';
import InputForm from '../../atoms/InputForm'
import Image from '../../atoms/Image'
import loginModalImg from '../../../../assets/images/public/login_modal.jpg';
import LinkNavigate from '../../atoms/LinkNavigate';

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
  z-index: 99;
`

const ModalStyle = styled(Modal)`
  height: 550px;
`

const RegisterModal = ({ onSubmit, children, onClose, openLoginModal }) => {
  return (
    <ModalStyle>
    <ModalFormStyle onSubmit={onSubmit}>
      <Image img={loginModalImg} alt="Register Modal" />
      <ModalClose onClick={onClose} />
      <InputForm placeholder='Nombre'/>
      <InputForm placeholder='Correo'/>
      <InputForm placeholder='Contraseña'/>
      {children}
      <div className='navigate'>
        <ButtonStyle type="submit">Registrarse</ButtonStyle>
        <span>Ya tienes cuenta? <LinkNavigate to='LoginModal' onClick={openLoginModal}>Inicia Sesión</LinkNavigate></span>
      </div>
    </ModalFormStyle>
    </ModalStyle>
  );
};

RegisterModal.propTypes = {
    onSubmit: PropsTypes.func.isRequired,
    children: PropsTypes.node.isRequired,
    onClose: PropsTypes.func.isRequired,
    openLoginModal: PropsTypes.func.isRequired
}

export default RegisterModal;
