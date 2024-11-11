import React from 'react'
import SliderMen1 from '../../../assets/image/footer_1.jpg'
import SliderMen2 from '../../../assets/image/login_modal.jpg'
import SliderMen3 from '../../../assets/image/login_modal.jpg'
import styled, { keyframes } from 'styled-components'


const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MenuSlider = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 2rem;
  overflow: hidden;
  box-shadow: 1px 1px 10px 1px #00000061;
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(80%);
  animation: ${scroll} 20s linear infinite;
`;

const SliderImage = styled.img`
  width: 20rem;
  height: 10%;
  padding-left: 1rem;
`;

const SliderMenu = () => {
  const images = [SliderMen1, SliderMen2, SliderMen3];

  return (
    <MenuSlider>
      <SliderTrack>
        {images.map((img, index) => (
          <SliderImage key={index} src={img} alt={`slide-${index}`} />
        ))}
        {images.map((img, index) => (
          <SliderImage key={`dup-${index}`} src={img} alt={`slide-dup-${index}`} />
        ))}
      </SliderTrack>
    </MenuSlider>
  );
};

export default SliderMenu;