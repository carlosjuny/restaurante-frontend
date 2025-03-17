import styled from "styled-components";
import InputForm from "../atoms/InputForm";
import Button from '../atoms/Button';

const FormStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 40px;
  gap: 20px;

  input {
    position: relative;
    margin-bottom: 10px;
    font-size: 16px;
  }

  textarea {
    position: relative;
    width: 100%; 
    height: 10rem; 
    padding: 8px;
    background: none;
    border: 1px solid #F4D976;
    color: #ffffff;
    font-size: 16px;
    resize: none;
  }

  .button {
    width: 50%;
    height: 50px;
    top: 15px;
    left: 20%;
    background-color: #E9D279;
    font-weight: 600;
    border-radius: 5px;
    font-size: 18px;
    transition: all 0.5s;

    &:hover {
      transition: all 0.5s;
      background-color: #ffffff;
      color: #343434;
    }
  }

  @media  (min-width: 1024px){

    textarea {
      height: 100%;
    }

    button {
      height: 30%;
    }

    .button {
    height: 85px;
    }
  }

  @media  (min-width: 1440px) {
    button {
      height: 15%;
    }
  }
`;

const Form = () => {
  return (
    <FormStyle>
      <InputForm placeholder="Nombre" />
      <InputForm placeholder="Correo" />
      <InputForm placeholder="Asunto" />
      <textarea placeholder="Mensaje"/>
      <Button className='button'>
          <p>Enivar</p>
      </Button>
    </FormStyle>
  );
};

export default Form;
