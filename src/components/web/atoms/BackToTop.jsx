import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const waveAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.692);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
`;


const BackTop = styled.div`
  position: fixed;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 20px;
  right: 20px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  background-color: #32312C;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  z-index: 6;

  // Onda animación
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    animation: ${waveAnimation} 1.5s infinite;
  }

  &:hover {
    background-color: #555;
  }

  // Ondas adicionales al hover
  &:hover::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background-color: rgba(51, 51, 51, 0.493);
    animation: ${waveAnimation} 1.5s infinite;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <BackTop isVisible={isVisible} onClick={scrollToTop}>
      ↑
    </BackTop>
  );
};

export default BackToTop;
