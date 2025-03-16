import styled from 'styled-components'
import { FaPhone } from "react-icons/fa6";

const BarraNavb =styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #F4D976;
    position: relative;
    z-index: 2;

    .num {
        position: relative;
        float: right;
        right: 2rem;
        top: 0.5rem
    }

    .phone {
        position: absolute;
        right: 160px;
        top: 11px;
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