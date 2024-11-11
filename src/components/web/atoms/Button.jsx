import React from 'react'
import styled from 'styled-components'

const ButtonStyle =styled.button`
    width: 6.5rem;
    height: 2.5rem;
    display: flex;
    position: relative;
    left: 25px;
    top: -2rem;
    cursor: pointer;
    border-radius: 0.2rem;
    background-color: #ffffff;
    color: #32312C;
    align-items: center;
    justify-content: center;
    z-index: 5;
    
    .icon {
        font-size: 20px;
    }

    p {
        margin-left: 0.5rem;
        margin-top: 0.2rem;
    }

    &:hover {
        transition: 0.4s;
        background-color: #32312C;
        color: #ffffff;
    }

    @media screen and (min-width: 1024px){
      top: -3.8rem;
      left: 0.8rem;

    }

`


const Button = ({ children, onClick }) => (
  <ButtonStyle onClick={onClick}>
    {children}
  </ButtonStyle>
);

export default React.memo(Button);
