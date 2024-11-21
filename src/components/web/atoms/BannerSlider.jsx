import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonNavegation from './ButtonNavegation';

const BannerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: -118px;

  .slide {
    position: absolute;
    width: 100%;
    height: 100vh;
    transition: opacity 0.5s ease;
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .controls {
    position: relative;
    z-index: 2;
    top: 52%;
    left: 45%;
    transform: translateX(-43.5%);
    display: flex;
    gap: 10px;

    button {
      width: 40px;
      height: 40px;
      background-color: #4747476f;
      border: none;
      cursor: pointer;
      border-radius: 2px;
      font-size: 22px;
      z-index: 2;

      &:hover {
        background-color: #F4D976;
        color: #32312C;
        transition: 0.5s ease;
      }
    }

    .prev {
      position: absolute;
      right: 40px;
      color: #ffffff;
    }

    .next {
      left: -25px;
      color: #ffffff;
    }
  }

  .toggle-controls {
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;

    .toggle {
      width: 10px;
      height: 10px;
      background-color: #ccc;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
      z-index: 2;

      &.active {
        background-color: #f4d976;
      }
    }
  }
`;

const BannerSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [images]);

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
        <button className="next" onClick={prevSlide}>❮</button>
        <button className="prev" onClick={nextSlide}>❯</button>
      </div>
      <div className="toggle-controls">
        {images.map((_, index) => (
          <div
            key={index}
            className={`toggle ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      <ButtonNavegation>Ver nuestro menú</ButtonNavegation>
    </BannerStyle>
  );
};

export default React.memo(BannerSlider);
