import styled from 'styled-components';
import Icon from '../../../assets/image/login_icon_google_plus.png';

const SelectStyle = styled.div`
  position: relative;
  display: grid;
  width: 100%;



  .Select {
    flex-direction: column;
    display: grid;
    justify-content: center;
    gap: 35px;
    padding-top: 60px;
    padding-bottom: 50px;
    grid-template-columns: repeat(2, 1fr);
  }

  .SelectItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .SelectItem img {
    width: 77px;
    margin-left: -120px;
    border: 1px solid #c1c1c1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .BtnSelect1, .BtnSelect2, .BtnSelect3, .BtnSelect4 {
    width: 200px;
    height: 80px;
    border-radius: 5px;
    border: 1px solid #5f5f5f92;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 15px rgba(34, 32, 32, 0.726);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    margin-bottom: 10px;
    
  }

  .BtnSelect1:hover, .BtnSelect2:hover, .BtnSelect3:hover, .BtnSelect4:hover {
    background-color: #E9D282;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .SelectItem p {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin: 0;
  }

  @media (min-width: 570px) {
    .Select {
      gap: 40px;
    }
  }

  @media (min-width: 1024px) {
    .Select {
      display: flex;
      flex-direction: row;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

const ButtonSelect = () => {
  return (
    <SelectStyle>
      <div className='Select'>
        <div className='SelectItem'>
          <div className='BtnSelect1'><img src={Icon} alt="icono Platillos" /></div>
          <p>Ejecutivos</p>
        </div>
        <div className='SelectItem'>
          <div className='BtnSelect2'><img src={Icon} alt="icono Hamburguesas" /></div>
          <p>Hamburguesas</p>
        </div>
        <div className='SelectItem'>
          <div className='BtnSelect3'><img src={Icon} alt="icono Bebidas" /></div>
          <p>Bebidas</p>
        </div>
        <div className='SelectItem'>
          <div className='BtnSelect4'><img src={Icon} alt="icono Postres" /></div>
          <p>Postres</p>
        </div>
      </div>
    </SelectStyle>
  );
};

export default ButtonSelect;
