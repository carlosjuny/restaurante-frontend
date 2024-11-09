import React from 'react'
import styled from 'styled-components'


const InputStyle =styled.input`
    position: absolute;
    width: 320px;
    height: 2.5rem;
    right: 25px;
    bottom: -40px;
    font-size: 16px;
    border: 1px solid #32312C;
    box-shadow: 1px 2px 2px 1px #32312C;
    outline: none;

    ::placeholder {
      color: #32312C;
    }

`

const Input = ({placeholder}) => {
  return (
    <InputStyle 
    type="text"
    placeholder={placeholder}>
    </InputStyle>
  )
}

export default Input
