import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 2rem;
  z-index: 1000;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      Bienvenido a TemplateWeb
    </LoadingContainer>
  );
};

export default LoadingScreen;
