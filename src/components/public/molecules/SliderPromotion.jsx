import { useState } from "react";
import styled from "styled-components";
import saucerOne from "../../../assets/images/public/saucer-one.png";
import saucerTwo from "../../../assets/images/public/saucer-two.png";
import saucerThree from "../../../assets/images/public/saucer-three.png";

const SliderContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $index }) => `translateX(-${$index * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  overflow: hidden;
  img {
    margin: auto;
    width: 600px;
    border-radius: 15px;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  font-size: 25px;
  background: #FFFFFF;
  color: #000;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  ${({ $left }) => ($left ? "left: 30px;" : "right: 30px;")}

  @media (min-width: 768px) {
    ${({ $left }) => ($left ? "left: 150px;" : "right: 150px;")}
  }

  @media (min-width: 1024px) {
    ${({ $left }) => ($left ? "left: 300px;" : "right: 300px;")}

    &:hover {
      background: #F4D976;
      transition: all 0.5s;
    }
  }
`;

const SliderPromotion = () => {
  const images = [
    saucerOne,
    saucerTwo,
    saucerThree,
  ];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      <SlideWrapper $index={index}>
        {images.map((img, i) => (
          <Slide key={i}>
            <img src={img} alt={`Platillo ${i + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>
      <Button $left onClick={prevSlide}>{"<"}</Button>
      <Button onClick={nextSlide}>{">"}</Button>
    </SliderContainer>
  );
};

export default SliderPromotion;
