import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const FormStyle = styled.div`
  display: flex;
  align-items: center;
`;

const StyleCardInput = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
  padding: 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    /* width: 60%;
    /*padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ffffff;
    color: #333333;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
    } */
  }
  
  textarea {
    /* width: 64%;
    height: 40%;
    margin: auto; */
  }

  @media (min-width: 1024px) {

  }

`;

const FormCard = () => {
  return (
    <FormStyle>
      <StyleCardInput>
        <Input />
        <Input />
        <Input />
        <textarea />
      </StyleCardInput>
    </FormStyle>
  );
};

export default FormCard;
