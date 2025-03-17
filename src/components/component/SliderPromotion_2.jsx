import { useState } from 'react';
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
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ isCenter }) => (isCenter ? '400px' : '320px')};
  height: auto;
  opacity: ${({ isCenter }) => (isCenter ? 1 : 0.5)};
  transform: ${({ position }) => position};
  transition: all 0.5s ease;
  z-index: ${({ isCenter }) => (isCenter ? 3 : 1)};

  @media (min-width: 768px){
  width: ${({ isCenter }) => (isCenter ? '600px' : '320px')};
  }
`;

const Controls = styled.div`
  position: absolute;
  width: 100%;
  bottom: 45%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 3;

  button {
    width: 50px;
    height: 50px;
    background-color: #ffffff6a;
    color: #000000;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #F9E279;
    }
  }

  @media (min-width: 768px){
    button {
    background-color: #0000009d;
    color: #ffffff;

    &:hover {
      background-color: #8071506e;
      border: 1px solid #000;
      color: #000;
    }
    }
  }
`;

const ToggleControls = styled.div`
  position: absolute;
  bottom: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  .toggle {
    width: 12px;
    height: 12px;
    background-color: #32312C;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #f0bc00;
    }
  }
`;

const SliderPromotion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const positions = [
    'translate(-150%, -50%) scale(0.8)',
    'translate(-50%, -50%) scale(1)',
    'translate(50%, -50%) scale(0.8)',
  ];

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

  return (
    <SliderContainer>
      <Slide>
        {images.map((img, index) => {
          const relativeIndex = (index - currentIndex + images.length) % images.length;
          const position = positions[relativeIndex];

          return (
            <Image
              key={index}
              src={img}
              alt={`Slide ${index}`}
              position={position}
              isCenter={relativeIndex === 1}
            />
          );
        })}
      </Slide>
      <Controls>
        <button onClick={prevSlide} className="prev">❮</button>
        <button onClick={nextSlide} className="next">❯</button>
      </Controls>
      <ToggleControls>
        {images.map((_, index) => (
          <div
            key={index}
            className={`toggle ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </ToggleControls>
    </SliderContainer>
  );
};

export default SliderPromotion;
