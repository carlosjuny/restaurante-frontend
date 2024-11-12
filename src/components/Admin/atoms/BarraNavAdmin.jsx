import React from 'react'
import styled from 'styled-components'
import IconAdmin from '../atoms/IconAdmin'
import Avatar from '../../../assets/image/avatar-de-hombre.png'

const BarraNavA =styled.div`
    width: 100%;
    height: 3rem;
    background-color: #F4D976;
    z-index: 0;

    img {
        width: 3%;
        position: absolute;
        right: 15px;
        top: 0;
        font-size: 20px;
    }

@media (min-width: 768px){
}
@media (min-width: 1024px){
}
`

const BarraNavAdmin = () => {
  return (
    <BarraNavA>
        <IconAdmin iconSrc={Avatar} />   
    </BarraNavA>
  )
}

export default BarraNavAdmin