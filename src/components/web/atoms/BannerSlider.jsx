import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide1 from '../../../assets/image/slider_image_1.jpg';
import Slide2 from '../../../assets/image/slider_image_2.jpg';
import ButtonNavegation from './ButtonNavegation';

const BannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: -111px;

  @media (min-width: 1024px) {
    margin-top: -127px;
  }

  .slide {
    position: absolute;
    width: 100%;
    height: 100vh;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  .active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .controls {
    position: relative;
    top: 54%;
    left: 45%;
    transform: translateX(-43%);
    display: flex;
    gap: 10px;

    @media (min-width: 1024px){
      left: 44%;
      top: 50%;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background-color: #4747476f;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    font-size: 22px;
  }

  .prev {
    position: absolute;
    right: 25px;
    color: #ffffff;
  }

  .next {
    left: -25px;
    color: #ffffff;
  }

  .next:hover, .prev:hover {
    background-color: #F4D976;
    color: #32312C;
    transition: 0.5s ease;
  }
`;

const images = [Slide1, Slide2];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BannerStyle>
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={img} alt={`slide-${index}`} />
        </div>
      ))}
      <div className="controls">
        <button className='next' onClick={prevSlide}>❮</button>
        <button className='prev' onClick={nextSlide}>❯</button>
      </div>
      <ButtonNavegation>Ver nuestro menú</ButtonNavegation>
    </BannerStyle>
  );
};

export default React.memo(BannerSlider);