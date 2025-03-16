import { useState } from 'react';
import styled from 'styled-components';
// import Image from '../atoms/Image';
import chef from '../../../assets/image/login_modal.jpg';
import ImgGoogle from '../../../assets/image/login_icon_google_plus.png';
import { Link } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    top: -50px;
    box-shadow: none;
  }

  .google {
    width: 20px;
  }
`;

const Banner = styled.div`
position: relative;
  width: 100%;
  height: 200px;
  z-index: -1;

  .modalogin {
    width: 450px;
    height: 250px;
    object-fit: cover;
    top: -27%;
    left: -4.8%;
  align-content: center;
    border-top-left-radius: 8px;
  }

  @media (min-width: 768px) {
    .modalogin {
    }
  }
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
      <Form>
        <Banner>
          <img src={chef} alt="Chef banner" className='modalogin'/>
        </Banner>
        <h2>Regístrate</h2>
        <Input type="text" placeholder="Nombre" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
        <SubmitButton type="submit">Regístrate</SubmitButton>
      </Form>
      <p>
        ¿Ya tienes una cuenta? <a href="#" onClick={handleLoginClick}>Inicia sesión</a>
      </p>
    </>
  ) : (
    <>
      <Form>
        <Banner>
          <img src={chef} alt="Chef banner" className='modalogin'/>
        </Banner>
        <h2>Iniciar Sesión</h2>
        <div>
          <p>Ingresa con Google</p>
          <img className="google" src={ImgGoogle} alt="Google" />
        </div>
        <Input type="text" placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <SubmitButton type="submit">
          <Link to="/admin" className="navLink">Acceder</Link>
        </SubmitButton>
      </Form>
      <p>
        ¿No tienes una cuenta? <a href="#" onClick={handleRegisterClick}>Regístrate</a>
      </p>
    </>
  );
};

export default LoginRegisterForm;
