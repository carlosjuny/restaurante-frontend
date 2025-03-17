import styled from 'styled-components'
import img1 from '../../../../assets/images/icons/logo_ladicha.png'
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import footer from '../../../../assets/images/public/footer_5.jpg'
import { Link } from 'react-router-dom'
import ButtonScroll from '../../atoms/ButtonScroll'

const FooterStyle =styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-color: #333;
  background-image: url(${footer});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  img {
    width: 5rem;
    margin-left: 5.5rem;
    margin-top: 2rem;
    position: relative;
  }

  .copyright {
    text-align: center;
    color: #ffffff;
    margin-top: 7rem;
    position: relative;
  }

  .networks {
    position: absolute;
    display: flex;
    font-size: 30px;
    right: 6rem;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;
  }

  .networks .network {
    margin-top: 3rem;
    margin-left: 1rem;
  }

  .network:hover {
    transition: 0.3s ease;
    color: #E9D282;
  }


  h1 {
    margin-top: -80px;
    margin-right: -220px;
  }
  
  .menuFooter {
    position: relative;
    top: 10%;
    margin-left: 4rem;
  }

  .menuFooter li {
    list-style: none;
    line-height: 40px;
    margin-bottom: 15px;
  }

  .menuFooter a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }

  .menuFooter a:hover {
    color: #E9D282;
  }

  @media (min-width: 1024px) {
    height: 75vh;
  }

`

const Footer = () => {
  return (
    <FooterStyle>
      <ButtonScroll/>
      <img src={img1}/>
      <div className='networks'>
        <h1>Redes sociales</h1>
        <FaWhatsapp className='network'/>
        <CiFacebook className='network'/>
        <FaInstagram className='network'/>
      </div>
      <div className='menuFooter'>
        <ul>
          <li><Link to='/' className='navLink'>Inicio</Link></li>
          <li><Link to='/sobrenosotros' className='navLink'>Sobre de nosotros</Link></li>
          <li><Link to='/menu' className='navLink'>Menú</Link></li>
          <li><Link to='/promociones' className='navLink'>Promociones</Link></li>
          <li><Link to='/contacto' className='navLink'>Contacto</Link></li>
        </ul>        
      </div>
      <p className='copyright'>Restaurante La Dicha - Todos los derechos de autor</p>
    </FooterStyle>
  )
}

export default Footer