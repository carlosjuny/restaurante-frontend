import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../../../assets/image/logo_ladicha_bl.png'
import { MdDeliveryDining } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import Button from '../atoms/button'
import Modal from './Modal'
import { Link } from 'react-router-dom'


const Nav =styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 0;

.menu {
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    text-align: center;
    line-height: 5rem;
    background-color: #333;
    transform: translateX(100%);
    transition: 0.5s ease-in;
    z-index: 7;
}

.menu_active {
    transform: translateX(0%);
}

.toggle .line1 {
    position: fixed;
    transform: rotate(-45deg) translate(-7px, 5px);
    border-radius: 1rem;
}

.toggle .line2 {
    opacity: 0;
}

.toggle .line3 {
    position: fixed;
    transform: rotate(45deg) translate(-4px, -5px);
    border-radius: 1rem;
}

.menu a {
    position: relative;
    text-decoration: none;
    justify-content: center ;
    font-size: 20px;
    border-bottom: 0px solid transparent;
    top: 9rem;
    color: #ffff;
}

.menu a::after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -2px;
    border-radius: 0.2rem;
    transition: 0.4s;
}

.menu a:hover:after {
    width: 100%;
}

.menu li {
    list-style: none;
}

.nav-toggle div {
    width: 2rem;
    height: 0.2rem;
    margin: 0.4rem;
    background-color: #ffffff;
    transition: 0.4s ease-in;
    border-radius: 1rem;
}

.nav-toggle {
    position: absolute;
    cursor: pointer;
    right: 2rem;
    margin-top: 2.5rem;
    z-index: 7;
}

.shopping {
    position: absolute;
    top: 5rem;
    right: 6rem;
    font-size: 30px;
    color: #E9D282;
    z-index: 6;
}

img {
    position: relative;
    width: 4rem;
    top: 1rem;
    left: 45%;
    z-index: 2;
}


@media screen and (max-width: 768px) {
    .nav-toggle {
        display: block;
    }
}

@media screen and (min-width: 1024px){
    .menu {
    position: relative ;
    height: 0;
    display: flex !important;
    justify-content: space-evenly !important;
    transform: translateX(0);
    background: none;
}

.menu a {
    top: -4rem;
}

.nav-toggle {
    display: none;
}

.shopping {
    top: 4.5rem;
    right: 2rem;
    cursor: pointer;
    z-index: 8;
}

img {
    left: 48%;
    top: 0.4rem;
}
}
`
const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  top: 15px;
  left: 2%;
  font-size: 0.9rem;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 0.3s;
  z-index: 3;

  /* Flecha tooltip */
  &::after {
    content: '';
    position: absolute;
    top: -25%;
    left: 10%;
    transform: rotate(180deg);
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
    z-index: 3;
  }

  @media screen and (min-width: 1024px){
    top: -10px;
  }
`;


const Navbar = () => {

    const [active, setActive] = useState("menu");
    const [toggleIcon, setToggleIcon] = useState('nav-toggle');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const navToggle = () => {
        active === 'menu'
        ? setActive('menu menu_active')
        : setActive('menu');

    toggleIcon === 'nav-toggle'
    ? setToggleIcon('nav-toggle toggle')
    : setToggleIcon('nav-toggle');

    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <Nav>
        <MdDeliveryDining className='shopping'/>
        <Link to='/' className='navLink'>{''}<img src={Logo} /></Link>
            <ul className={active}>
                <li className='navItem'><Link to='/sobrenosotros' className='navLink'>Sobre nostros</Link>{''}</li>
                <li className='navItem'><Link to='/menu' className='navLink'>Menú</Link>{''}</li>
                <li className='navItem'><Link to='/promociones' className='navLink'>Promociones</Link>{''}</li>
                <li className='navItem'><Link to='/contacto' className='navLink'>Contacto</Link>{''}</li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            <ButtonContainer
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <Button onClick={openModal}>
                    <FaUser /><p>Acceso</p>
                </Button>
                <Tooltip show={showTooltip}>
                    Inicia sesión para disfrutar nuestros descuentos
                </Tooltip>
            </ButtonContainer>
        {isModalOpen && <Modal onClose={closeModal} />}
    </Nav>
  )
}

export default Navbar
