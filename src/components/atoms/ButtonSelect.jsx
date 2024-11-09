import styled from 'styled-components';
import Icon from '../../assets/image/login_icon_google_plus.png';

const SelectStyle = styled.div`
  position: relative;
  width: 100%;

  .Select {
    display: flex;
    justify-content: center;
    gap: 55px;
    padding-top: 100px;
    padding-bottom: 50px;
  }

  .titleSelect {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-left: -62%;
    top: 80px;
    gap: 50px;
    font-weight: 500;
    color: #000;

    @media  (min-width: 1024px){
     margin-left: -23.5%;
    }
  }

  .Select img {
    width: 60px;
  }

  .BtnSelect1, .BtnSelect2, .BtnSelect3 {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #5f5f5f92;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 15px rgba(34, 32, 32, 0.726); /* Sombra inicial */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Transición para sombra y movimiento */
  }

  /* Sombra y flotación al pasar el ratón */
  .BtnSelect1:hover, .BtnSelect2:hover, .BtnSelect3:hover {
    background-color: #E9D282;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); /* Aumenta la sombra para el efecto de flotación */
    transform: translateY(-5px); /* Mueve el botón hacia arriba */
  }
`;

const ButtonSelect = () => {
  return (
    <SelectStyle>
      <div className='Select'>
        <div className='BtnSelect1'><img src={Icon} alt="icon" /></div>
        <div className='BtnSelect2'><img src={Icon} alt="icon" /></div>
        <div className='BtnSelect3'><img src={Icon} alt="icon" /></div>
        <div className='titleSelect'>
          <p>Platillos</p>
          <p>Bebidas</p>
          <p>Postres</p>
        </div>
      </div>
    </SelectStyle>
  );
};

export default ButtonSelect;
