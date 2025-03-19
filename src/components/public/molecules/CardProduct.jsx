import styled from 'styled-components';
import Receta from '../../../assets/images/public/saucer-one.png';
import Button from '../atoms/Button'
import Image from '../../public/atoms/Image'

const CardContainer = styled.div`
  display: grid;
  width: 60%;
  margin-left: 17%;
  gap: 40px;
  padding: 25px;
  padding-top: 20px;
  padding-bottom: 60px;
  margin-bottom: 30px;
  border-radius: 5px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
    margin-left: 2.5%;
    width: 95%;
  }
`;

const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1f1e1e;
  box-shadow: 0px 4px 4px rgba(56, 56, 56, 0.25),  1px 0px 3px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;  
  border-radius: 5px;
  padding-bottom: 20px;
  align-items: center;

  img {
    width: 300px;
  }

  .price {
    position: relative;
    flex-direction: column;
    left: 20px;
    margin: auto;
    justify-content: center;
    line-height: 45px;
    display: flex;
    top: -10px;
    width: 350px;
    height: 70px;
    gap: 20px;
  }

  .Buttom {
    position: absolute;
    width: 140px;
    top: 45px;
    left: 0;
    background-color: #EFD574;
    font-weight: 600;
    transition: all 0.5s;
    font-size: 16px;
  }

  .Buttom:hover {
    background-color: #FFFFFF;
  }

  p {
    font-size: 16px;
    color: #FFFFFF;
    margin-top: -40px;
  }
  @media (min-width: 1024px) {

    h3{
        font-size: 22px;
    }
    }


  &:hover .overlay {
    opacity: 1;
  }
`;

const CardProduct = () => {
  return (
    <CardContainer>
      {[...Array(9)].map((_, i) => (
        <CardStyle key={i}>
          <Image img={Receta} alt="Receta" />
          <div className='price'>
            <p>COP 20000.00</p>
            <p>Carne, papas y ensalada</p>
            <Button className='Buttom' >Añadir al carrito</Button>
          </div>
          <div>
          </div>
        </CardStyle>
      ))}
    </CardContainer>
  );
};

export default CardProduct;
