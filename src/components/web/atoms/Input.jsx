import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import IconSearch from '../../../assets/svg/search.svg'


const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

const InputStyle =styled.input`
    width: 320px;
    height: 2.5rem;
    border: 1px solid #6D6C6C;
    box-shadow: 1px 2px 4px 1px #6d6c6c9b;
    outline: none;

    ::placeholder {
      color: #32312C;
    }

  @media (min-width: 1024px) {
    width: 600px;
  }

`

const IconContainer = styled.div`
  display: flex;
  width: 55px;
  height: 40px;
  background-color: #E9D282;
  border: 1px solid #6D6C6C;
  box-shadow: 1px 2px 4px 1px #6d6c6c9b;

  img{
    width: 30px;
    margin-top: -0.5rem;    
  }
`

const Input = ({placeholder}) => {
  return (
    <InputContainer>
      <InputStyle 
      type="text"
      placeholder={placeholder}>
      </InputStyle>
      <IconContainer>
        <Icon icon={<img src={IconSearch} />} />
      </IconContainer>
    </InputContainer>
  )
}

export default Input
