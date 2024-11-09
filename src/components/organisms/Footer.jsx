import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/image/logo_ladicha_bl.png'
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const FooterStyle =styled.div`
  width: 100%;
  height: 40vh;
  background-color: #333;

  img {
    width: 4rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .copyright {
    text-align: center;
    color: #ffffff;
    margin-top: 9rem;
  }

  .networks {
    position: absolute;
    display: flex;
    font-size: 30px;
    margin-top: -13rem;
    right: 6rem;
    color: #ffffff;
    cursor: pointer;
  }

  .networks .network {
    margin-left: 1rem;
  }

  .network:hover {
    transition: 0.3s ease;
    color: #E9D282;
  }


  h2 {
    margin-top: -3rem;
    margin-right: -10.5rem;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <img src={img1}/>
      <p className='copyright'>Restaurante La Dicha - Todos los derechos de autor</p>
      <div className='networks'>
        <h2>Redes sociales</h2>
        <FaWhatsapp className='network'/>
        <CiFacebook className='network'/>
        <FaInstagram className='network'/>
      </div>
    </FooterStyle>
  )
}

export default Footer