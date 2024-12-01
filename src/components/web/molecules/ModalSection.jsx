import { useState } from 'react';
import styled from 'styled-components';
import ImgGoogle from '../../../assets/image/login_icon_google_plus.png';
import { Link } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 15px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const LoginRegisterForm = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(false);
  };

  return showRegisterForm ? (
    <>
      <h2>Regístrate</h2>
      <Form>
        <Input type="text" placeholder="Nombre" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <SubmitButton type="submit">Regístrate</SubmitButton>
      </Form>
      <p>¿Ya tienes una cuenta? <a href="#" onClick={handleLoginClick}>Inicia sesión</a></p>
    </>
  ) : (
    <>
      <div>
        <p>Ingresa con Google</p>
        <img src={ImgGoogle} alt="Google" />
      </div>
      <h2>Iniciar Sesión</h2>
      <Form>
        <Input type="text" placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <SubmitButton type="submit">
          <Link to="/admin" className="navLink">Acceder</Link>
        </SubmitButton>
      </Form>
      <p>¿No tienes una cuenta? <a href="#" onClick={handleRegisterClick}>Regístrate</a></p>
    </>
  );
};

export default LoginRegisterForm;
