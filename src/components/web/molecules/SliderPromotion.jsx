import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../assets/image/slider_image_1.jpg';
import img2 from '../../../assets/image/slider_image_2.jpg';
import img3 from '../../../assets/image/slider_image_3.png';

const images = [img1, img2, img3];

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #f4d97681;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Image = styled.img`
  padding-top: 150px;
  padding-bottom: 50px;
  width: 100%;
  width: ${({ isCenter }) => (isCenter ? '500px' : '300px')};
  height: 80%;
  opacity: ${({ isCenter }) => (isCenter ? 1 : 0.5)};
  transform: ${({ isLeft, isRight }) =>
    isLeft ? 'translateX(120%) scale(0.8)' : isRight ? 'translateX(-120%) scale(0.8)' : 'scale(1)'};
  transition: opacity 0.4s ease;
  z-index: ${({ isCenter }) => (isCenter ? 2 : 1)};
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${({ isCenter, isLeft, isRight }) =>
    isCenter
      ? 'translateX(-50%) scale(1.2)'
      : isLeft
      ? 'translateX(-170%) scale(0.6)'
      : isRight
      ? 'translateX(70%) scale(0.6)'
      : 'scale(0.8)'};
`;

const Controls = styled.div`
  position: absolute;
  width: 100%;
  top: 85%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 2;

  button {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .prev {
    position: absolute;
    left: 250px;
  }

  .next {
    position: absolute;
    right: 250px;
  }

  @media (min-width: 768px) {
    .prev {
    left: 300px;
  }

  .next {
    right: 300px;
  }
  }

  @media (min-width: 1024px) {
    
    top: 40%;

    .prev {
    left: 250px;
  }

  .next {
    right: 250px;
  }
  }
`;

const SliderPromotion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <Slide>
        {images.map((img, index) => {
          const isCenter = index === currentIndex;
          const isLeft = index === (currentIndex - 1 + images.length) % images.length;
          const isRight = index === (currentIndex + 1) % images.length;

          return (
            <Image
              key={index}
              src={img}
              alt={`Slide ${index}`}
              isCenter={isCenter}
              isLeft={isLeft}
              isRight={isRight}
            />
          );
        })}
      </Slide>
      <Controls>
        <button onClick={prevSlide} className="prev">❮</button>
        <button onClick={nextSlide} className="next">❯</button>
      </Controls>
    </SliderContainer>
  );
};

export default SliderPromotion;
