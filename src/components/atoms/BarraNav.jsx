import React from 'react'
import styled from 'styled-components'
import { FaPhone } from "react-icons/fa6";


const BarraNavb =styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #E9D282;

    .num {
        position: relative;
        float: right;
        right: 2rem;
        top: 0.5rem
    }

    .phone {
        position: relative;
        left: 68%;
        top: 0.4rem;
    }

@media (min-width: 768px){
  .phone {
    left: 79%;
  }
}
@media (min-width: 1024px){
  .phone {
    left: 83%;
  }
}
`


const BarraNav = () => {
  return (
    <BarraNavb>
        <FaPhone className='phone'/>
        <span className='num'>300-000-0000</span>        
    </BarraNavb>
  )
}

export default BarraNav