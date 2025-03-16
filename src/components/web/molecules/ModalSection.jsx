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
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    usuario: '',
    contraseña: ''
  });

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Registro exitoso: ' + data.message);
      } else {
        const error = await response.json();
        alert('Error en el registro: ' + error.message);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario: formData.usuario,
          password: formData.contraseña,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Inicio de sesión exitoso: ' + data.message);
      } else {
        const error = await response.json();
        alert('Error al iniciar sesión: ' + error.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return showRegisterForm ? (
    <>
      <h2>Regístrate</h2>
      <Form onSubmit={handleRegisterSubmit}>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
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
      <Form onSubmit={handleLoginSubmit}>
        <Input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleInputChange}
        />
        <SubmitButton type="submit">
          <Link to="/admin" className="navLink">Acceder</Link>
        </SubmitButton>
      </Form>
      <p>¿No tienes una cuenta? <a href="#" onClick={handleRegisterClick}>Regístrate</a></p>
    </>
  );
};

export default LoginRegisterForm;
