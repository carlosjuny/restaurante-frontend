import React, {useState} from 'react'
import styled from 'styled-components'
import chef from '../../assets/image/login_modal.jpg'
import ImgGoogle from '../../assets/image/login_icon_google_plus.png'

const ModalStyle =styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;

`
const ModalContent = styled.div`
    width: 400px;
    height: 560px;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
    overflow: hidden;
    
    .TitleLogin {
      margin-top: -12px;
    }

    .TitleRegister {
      margin-top: -6px;
    }

    .web {
      display: flex;
      justify-content: center;
      gap: 20px;
      line-height: 50px;
    }

    .web img {
      width: 45px;
      left: 0;
      top: -3px;
    }

    .web1, .web2, .web3 {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #41414197;
      cursor: pointer;
    }

    .web1:hover{ 
      background-color: #E9D282;
      transition: 0.5s ease;
    }
`;

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

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 3;
    color: #fff;
    background-color: #000000b0;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  left: -12rem;
  top: -3.1rem;

  h3{
    z-index: 1;
    margin: auto;
    font-size: 40px;
    margin-left: -45%;
    margin-bottom: 40px;
    color: #fff;
  }

  @media screen and (min-width: 1024px){
    left: -12.2rem;
  }
`;

const Image = styled.img`
  min-width: 410px;
  height: 220px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 17px;
  left: 45%;
  min-width: 410px;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  @media screen and (min-width: 1024px){
    top: 6px;
    left: 47%;
  }
`;

const Modal = ({ onClose }) => {
const [showRegisterForm, setShowRegisterForm] = useState(false);

const handleRegisterClick = (e) => {
  e.preventDefault();
  setShowRegisterForm(true);
};

const handleLoginClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(false);
  };

  return (
    <ModalStyle>
        <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageContainer>
          <Image src={chef} alt="Logo" />
          <DarkOverlay />
          <h3>Bienvenido</h3>
        </ImageContainer>
        {showRegisterForm ? (
          <>
            <h2 className='TitleRegister'>Regístrate</h2>
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
          <div className='web'>
            <p>Ingresa con Google</p>
            <div className='web1'><img src={ImgGoogle}/></div>
            {/* <div className='web2'></div>
            <div className='web3'></div> */}
          </div>
            <h2 className='TitleLogin'>Iniciar Sesión</h2>
            <Form>
              <Input type="text" placeholder="Usuario" />
              <Input type="password" placeholder="Contraseña" />
              <SubmitButton type="submit">Acceder</SubmitButton>
            </Form>
            <p>¿No tienes una cuenta? <a href="#" onClick={handleRegisterClick}>Regístrate</a></p>
          </>
        )}
      </ModalContent>
    </ModalStyle>
  )
}

export default Modal;