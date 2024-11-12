import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Menu from '../../../assets/svg/menu_grid.svg';
import Resources from '../../../assets/svg/filter.svg';
import Store from '../../../assets/svg/store.svg';
import User from '../../../assets/svg/user.svg';
import Settings from '../../../assets/svg/settings.svg';
import Down from '../../../assets/svg/down.svg';
import Up from '../../../assets/svg/up.svg';

const MenuStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '0%')};
  width: ${(props) => (props.isOpen ? '50%' : '10%')};
  height: 100vh;
  background-color: #4b4b4bdd;
  z-index: 1;
  transition: left 0.3s ease, width 0.3s ease;
  overflow: hidden;
  overflow-y: auto;

  @media (min-width: 1024px) {
    width: ${(props) => (props.isOpen ? '20%' : '4%')};
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;

  }

  ul li {
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: flex-start;
    position: relative;
  }

  ul li .menu-item {
    width: 270px;
    display: flex;
    align-items: center;
    gap: 35px;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    margin-top: 1rem;
  }

  ul li .menu-item img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }

  ul li .menu-item span {
    flex-grow: 1;
  }

  ul li .menu-item .toggle-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-left: auto;
  }

  h3 {
    flex-grow: 1;
    text-align: center;
    margin-left: 2rem;
    color: #ffffff;
  }
`;

const Submenu = styled.ul`
  list-style: none;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  border-radius: 8px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  li img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  li a {
    text-decoration: none;
    color: #ffffff;
    font-size: 0.9rem;
    width: 200px;
    margin-left: 50%;
    padding-top: 1rem;
  }
`;

const MenuToggleIcon = styled.div`
  cursor: pointer;
  position: relative;
  top: 5px;
  left: ${(props) => (props.isOpen ? '10px' : '10px')};
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  z-index: 2;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`;

const MenuAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const submenus = [
    {
      title: 'Recursos Humanos',
      icon: Resources,
      options: ['Perfil', 'Configuración', 'Salir'],
    },
    {
      title: 'Mercadeo y Servicio',
      icon: Store,
      options: ['Ventas', 'Promociones', 'Feedback'],
    },
    {
      title: 'Área de Producción',
      icon: User,
      options: ['Producción diaria', 'Control de calidad'],
    },
    {
      title: 'Área Financiera',
      icon: User,
      options: ['Facturación', 'Cuentas por pagar'],
    },
    {
      title: 'Área Administrativa',
      icon: Settings,
      options: ['RRHH', 'Proyectos', 'Oficinas'],
    },
    {
      title: 'Dashboard',
      icon: Settings,
      options: [],
    },
  ];

  return (
    <div>
      <MenuStyle isOpen={isMenuOpen}>
        <ul>
          <MenuToggleIcon onClick={toggleMenu} isOpen={isMenuOpen}>
            <img src={Menu} alt="Menu" />
            <h3>Panel la Dicha</h3>
          </MenuToggleIcon>
          {submenus.map((submenu, index) => (
            <li key={index}>
              {submenu.options.length > 0 ? (
                <>
                  <div className="menu-item">
                    <img src={submenu.icon} alt={`${submenu.title} Icon`} />
                    <span>{submenu.title}</span>
                    <img
                      src={openSubmenus[index] ? Up : Down}
                      alt="Toggle Submenu"
                      className="toggle-icon"
                      onClick={() => toggleSubmenu(index)}
                    />
                  </div>
                  <Submenu isOpen={openSubmenus[index]}>
                    {submenu.options.map((option, subIndex) => (
                      <li key={subIndex}>
                        <Link to={`/${option.toLowerCase().replace(/\s+/g, '-')}`}>{option}</Link>
                      </li>
                    ))}
                  </Submenu>
                </>
              ) : (
                // Link directo
                <Link to="/" className="menu-item">
                  <img src={submenu.icon} alt={`${submenu.title} Icon`} />
                  <span>{submenu.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </MenuStyle>
    </div>
  );
};

export default MenuAdmin;
