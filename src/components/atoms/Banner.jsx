import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide1 from '../../assets/image/slider_image_1.jpg';
import Slide2 from '../../assets/image/slider_image_2.jpg';

const BannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: -157px;

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
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  button {
    width: 40px;
    height: 40px;
    background-color: #ffffff88;
    color: #000;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    font-size: 22px;
  }

  .prev {
    right: 20px;
  }

  .next {
    left: -20px;
  }

  @media (min-width: 1024px) {
    margin-top: -173px;
  }

`;

const images = [Slide1, Slide2]; // Agregar imágenes

const Banner = () => {
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
    </BannerStyle>
  );
};

export default React.memo(Banner);
