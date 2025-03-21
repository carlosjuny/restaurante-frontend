import styled from 'styled-components';
import PropsTypes from 'prop-types'
import Modal from '../../molecules/Modal';
import ModalClose from '../../atoms/ModalClose';
import Button from '../../atoms/Button';
import InputForm from '../../atoms/InputForm'
import Image from '../../atoms/Image'
import loginModalImg from '../../../../assets/images/public/login_modal.jpg';
import LinkNavigate from '../../atoms/LinkNavigate';
import { getCsrfToken, login } from '../../../../services/api';
import { useState } from 'react';

const ModalFormStyle = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;

  input {
    position: relative;
    width: 380px;
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

const LoginModal = ({ onClose, openRegisterModal, onClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await getCsrfToken(); // Obtener token CSRF
      const response = await login({ email, password });

      if (response.status === 200) {
        console.log('Autenticación exitosa:', response.data);
        // Redirigir o almacenar el token si es necesario
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales incorrectas o error en la autenticación.');
    }
  };

  return (
    <Modal>
      <ModalFormStyle >
        <Image img={loginModalImg} alt="Login Modal" className='ModalImg'/>
        <ModalClose onClick={onClose} />
        <InputForm
          placeholder='Correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          placeholder='Contraseña'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='navigate'>
          <ButtonStyle type="button" onClick={handleSubmit}>Acceder</ButtonStyle>
          <span>¿No tienes cuenta? <LinkNavigate to='RegisterModal' onClick={openRegisterModal}>Regístrate</LinkNavigate></span>
        </div>
      </ModalFormStyle>
    </Modal>
  );
};

LoginModal.propTypes = {
  onClose: PropsTypes.func.isRequired,
  openRegisterModal: PropsTypes.func.isRequired,
  onClick: PropsTypes.func
};


export default LoginModal;
