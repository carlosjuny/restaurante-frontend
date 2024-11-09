import React from 'react';
import styled from 'styled-components';
import Receta from '../../assets/image/card_image_1.jpg';

const CardContainer = styled.div`
  display: grid;
  margin-left: 10%;
  gap: 25px;
  padding: 25px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(403px, 1fr));
    margin-left: 3%;
  }

`;

const CardStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 403px;
  height: 461px;
  background: #fdfdfd;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 95%;
    margin-bottom: 145px;
    height: auto;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  p {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  button {
    background-color: #e9d282;
    color: #333;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d1b66d;
    }
  }
`;

const Card = () => {
  return (
    <CardContainer>
      {[...Array(6)].map((_, i) => (
        <CardStyle key={i}>
          <img src={Receta} alt="Receta" />
          <h3>Carne, papas y ensalada</h3>
          <Overlay className="overlay">
            <p>COP 20000.00</p>
            <button>Añadir al carrito</button>
          </Overlay>
        </CardStyle>
      ))}
    </CardContainer>
  );
};

export default Card;
