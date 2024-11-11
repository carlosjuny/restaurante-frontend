import React from 'react'
import styled from 'styled-components'

const ButtonOrder = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2.9rem;
    bottom: 6rem;
    cursor: pointer;
    border-radius: 0.2rem;
    background-color: #F4D976;
    color: #32312C;
    font-weight: 600;
    z-index: 5;
    
    p {
        margin-top: 0.5rem;
    }

    &:hover {
        transition: 0.4s;
        background-color: #757575;
        color: #ffffff;
    }

@media screen and (min-width: 768px){
    right: 22%;
}

@media screen and (min-width: 1024px){
    right: 23%;
    bottom: 10rem;
}

@media screen and (min-width: 1440px){
    right: 27%;
}
`

const BtnOrder = ({ children, onClick }) => {
  return (
    <ButtonOrder onClick={onClick}>
    {children}
    </ButtonOrder>
  )
}

export default React.memo(BtnOrder);