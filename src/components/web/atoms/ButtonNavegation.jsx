import React from 'react'
import styled from 'styled-components'

const ButtonNav =styled.div`
    position: relative;
    display: flex;
    bottom: 0;
    top: 18rem;
    width: 12rem;
    height: 2.9rem;
    margin: auto;
    background-color: #F4D976;
    color: #32312C;
    justify-content: center;
    align-items: center;
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
    {children}
    </ButtonNav>
  )
}

export default ButtonNavegation