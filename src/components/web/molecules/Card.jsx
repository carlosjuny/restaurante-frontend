import React from 'react';
import styled from 'styled-components';
import Receta from '../../../assets/image/card_image_1.jpg';

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
  box-shadow: 1px 4px 4px 1px rgba(56, 56, 56, 0.25), 1px 0px 4px 2px rgba(0, 0, 0, 0.25);
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
    margin-left: 10%;
  }

  @media (min-width: 1024px) {
    margin-left: 2%;
    width: 95%;
  }
`;

const CardStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 303px;
  height: 361px;
  background: #fdfdfd;
  box-shadow: 0px 4px 4px rgba(56, 56, 56, 0.25),  1px 0px 3px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;

  img {
    width: 95%;
    margin-bottom: 115px;
    height: auto;
    border-radius: 5px;

    @media (min-width: 1024px) {
      margin-bottom: 85px;  
    }
  }

  h3{
    @media (min-width: 1024px) {
        font-size: 22px;
    }
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
      {[...Array(8)].map((_, i) => (
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
