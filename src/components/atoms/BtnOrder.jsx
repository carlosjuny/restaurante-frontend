import React from 'react'
import styled from 'styled-components'

const ButtonOrder = styled.button`
    width: 6.5rem;
    height: 2.5rem;
    display: flex;
    position: relative;
    top: -5rem;
    cursor: pointer;
    border-radius: 0.2rem;
    background-color: #E9D282;
    color: #32312C;
    justify-content: center;
    z-index: 5;
    
    p {
        margin-top: 0.5rem;
    }

    &:hover {
        transition: 0.4s;
        background-color: #32312C;
        color: #ffffff;
    }

@media screen and (min-width: 768px){
    top: 7rem;
    left: 6.5rem;
}

@media screen and (min-width: 1024px){
    left: 7.5rem;
}

`

const BtnOrder = ({ children, onClick }) => {
  return (
    <ButtonOrder onClick={onClick}>
    {children}<p>Aquí</p>
    </ButtonOrder>
  )
}

export default React.memo(BtnOrder);