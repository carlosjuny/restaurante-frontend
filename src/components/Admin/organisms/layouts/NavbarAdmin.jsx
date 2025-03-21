import { useState } from 'react';
import styled from 'styled-components';
import LinkNavigate from '../../../public/atoms/LinkNavigate';
import IconSvg from '../../../public/atoms/IconSvg';
import Down from '../../../../assets/svg/down.svg';
import Up from '../../../../assets/svg/up.svg';

const MenuStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: flex;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? '0' : '0%')};
  width: ${(props) => (props.isOpen ? '350px' : '60px')};
  height: 100vh;
  background-color: #2c2c2cf2;
  z-index: 1;
  transition: left 0.3s ease, width 0.3s ease;
  overflow: hidden;
  z-index: 2;

  ul {
    display: flex;
    flex-direction: column;
  }

  ul li {
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 200px;
    cursor: pointer;
    color: #FFFFFF;
  }

  ul li .toggle-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  ul li ul {
    max-height: 0;
    padding-left: 20px;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 0;
  }

  ul li ul.open {
    max-height: 300px;
    opacity: 1;
  }

  .subMenu {
    position: relative;
    top: 60px;
    margin-bottom: 10px;
  }

  .subMenuIcon {
    display: flex;
    width: 260px;
  }

  .dashboard {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 55px;
  }

  h3 {
    flex-grow: 1;
    text-align: center;
    margin-left: 2rem;
    color: #ffffff;
  }

  .icon {
    display: flex;
    width: 240px;

    span {
      padding-left: 50px;
    }

    .svg {
      padding-left: 10px;
    }

    .svg.rotated {
      position: relative;
      top: -8px;
      left: 10px;
      transform: rotate(180deg);
    }
  }
`;

const MenuToggleIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  cursor: pointer;
  position: relative;
  top: 5px;
  left: ${(props) => (props.isOpen ? '0px' : '0px')};
  z-index: 2;

  .menu {
    position: absolute;
    left: 10px;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`;

const CustomLinkNavigate = styled(LinkNavigate)`
  position: relative;
  width: 170px;
  left: 55px;
  text-align: start;
  color: #FFFFFF !important;
`;

const DashboardLinkNavigate = styled(LinkNavigate)`
  position: relative;
  left: -16px;
  color: #FFFFFF;
`

const NavbarAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [rotatedIcon, setRotatedIcon] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenSubmenus({});
    }
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => {
      const newSubmenus = { ...prev };
      if (newSubmenus[index]) {
        newSubmenus[index] = false;
        setRotatedIcon(null);
      } else {
        Object.keys(newSubmenus).forEach((key) => {
          newSubmenus[key] = false;
        });
        newSubmenus[index] = true;
        setRotatedIcon(index);
      }
      return newSubmenus;
    });
  };
  
  return (
    <div>
      <MenuStyle isOpen={isMenuOpen}>
        <ul>
          <MenuToggleIcon onClick={toggleMenu} isOpen={isMenuOpen}>
            <IconSvg name="Toogle" size="35" className="menu" svg={isMenuOpen ? Up : Down} />
          </MenuToggleIcon>

          <li className='subMenu'>
            <div className='subMenuIcon'>
            <IconSvg name='Filter' size="25"/>
            <div className='icon'>
              <span>Recursos Humanos</span>
              <IconSvg name='Dowm' size="25" className={`svg ${rotatedIcon === 0 ? 'rotated' : ''}`}  onClick={() => toggleSubmenu(0)}/>
            </div>
            </div>
            <ul className={openSubmenus[0] ? "open" : "" }>
              <li><CustomLinkNavigate to="">Perfil</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Configuración</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Salir</CustomLinkNavigate></li>
            </ul>
          </li>

          <li className='subMenu'>
            <div className='subMenuIcon'>
              <IconSvg name='Store' size="25"/>
              <div className='icon'>
                <span>Mercadeo y Servicio</span>
                <IconSvg name='Dowm' size="25" className={`svg ${rotatedIcon === 1 ? 'rotated' : ''}`} onClick={() => toggleSubmenu(1)}/>
              </div>
            </div>
            <ul className={openSubmenus[1] ? "open" : "" }>
              <li><CustomLinkNavigate to="">Clientes</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Pedidos</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="/admin/mesas">Gestión de mesas</CustomLinkNavigate></li>
            </ul>
          </li>

          <li className='subMenu'>
            <div className='subMenuIcon'>
              <IconSvg name='User' size="25"/>
                <div className='icon'>
                  <span>Área de Producción</span>
                  <IconSvg name='Dowm' size="25" className={`svg ${rotatedIcon === 2 ? 'rotated' : ''}`} onClick={() => toggleSubmenu(2)}/>
               </div>
            </div>
            <ul className={openSubmenus[2] ? "open" : "" }>
              <li><CustomLinkNavigate to="">Inventario</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Menú</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Proveedores</CustomLinkNavigate></li>
            </ul>
          </li>

          <li className='subMenu'>
            <div className='subMenuIcon'>
             <IconSvg name='User' size="25"/>
              <div className='icon'>
                <span>Área Financiera</span>
                <IconSvg name='Dowm' size="25" className={`svg ${rotatedIcon === 3 ? 'rotated' : ''}`} onClick={() => toggleSubmenu(3)}/>
              </div>
            </div>
            <ul className={openSubmenus[3] ? "open" : "" }>
              <li><CustomLinkNavigate to="">Contabilidad</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Reportes</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Punto de venta</CustomLinkNavigate></li>
            </ul>
          </li>

          <li className='subMenu'>
            <div className='subMenuIcon'>
              <IconSvg name='Settings' size="25"/>
              <div className='icon'>
                 <span>Área Administrativa</span>
                <IconSvg name='Dowm' size="25" className={`svg ${rotatedIcon === 4 ? 'rotated' : ''}`} onClick={() => toggleSubmenu(4)}/>
              </div>
            </div>
            <ul className={openSubmenus[4] ? "open" : "" }>
              <li><CustomLinkNavigate to="">Gestión documentos</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Sitio Web</CustomLinkNavigate></li>
              <li><CustomLinkNavigate to="">Configuración</CustomLinkNavigate></li>
            </ul>
          </li>

          <li className='dashboard'>
              <IconSvg name='Settings' size="25"/>
              <DashboardLinkNavigate to="">Dashboard</DashboardLinkNavigate>
          </li>
        </ul>
      </MenuStyle>
    </div>
  );
};

export default NavbarAdmin;
