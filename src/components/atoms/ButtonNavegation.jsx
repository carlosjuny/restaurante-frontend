import React from 'react'
import styled from 'styled-components'

const ButtonNav =styled.button`
    position: relative;
    bottom: 0;
    top: 12rem;
    width: 12rem;
    margin: auto;
    background-color: #E9D282;
    color: #32312C;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 0.2rem;
    transition: background-color 0.3s ease;
    cursor: pointer;
    z-index: 4;
    font-weight: 600;

    &:hover {
        background-color: #ffffff;
        color: #32312C;
    }

    @media screen and (max-width: 769px) {
}

    @media screen and (min-width: 1024px){

}


`

const ButtonNavegation = ({ children, onClick }) => {
  return (
    <ButtonNav onClick={onClick}>
    {children} Ver nuestro menú
    </ButtonNav>
  )
}

export default ButtonNavegation