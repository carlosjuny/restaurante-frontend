import styled from "styled-components";
import InputForm from "./InputFormu";
import Button from '../atoms/Button';

const FormStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333333;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 40px;
  gap: 20px;

  input {
    position: relative;
    margin-bottom: 10px;
  }

  textarea {
    position: relative;
    width: 100%; 
    height: 10rem; 
    padding: 8px;
  }

  button {
    width: 100%;
    height: 3rem;
    top: 15px;
    left: 0%;
    background-color: #E9D279;
    font-weight: 600;

    &:hover {
      transition: 0.5s ease;
      background-color: #ffffff;
      color: #343434;
    }
  }

  @media  (min-width: 1024px){
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    textarea {
      height: 100%;
    }

    button {
      height: 30%;
    }
  }

  @media  (min-width: 1440px) {
    button {
      height: 15%;
    }
  }
`;

const FormCard = () => {
  return (
    <FormStyle>
      <InputForm placeholder="Nombre" />
      <InputForm placeholder="Correo" />
      <InputForm placeholder="Asunto" />
      <textarea placeholder="Mensaje"/>
      <Button>
          <p>Acceso</p>
      </Button>
    </FormStyle>
  );
};

export default FormCard;
