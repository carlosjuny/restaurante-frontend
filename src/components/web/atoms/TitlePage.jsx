import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
      display: flex;
      position: relative;
      font-size: 35px;
      top: -330px;
      justify-content: center;
      z-index: 2;
      color: #E9D282;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;
    right: 10%;
    font-size: 50px;;
    /* top: 420px; */
  }
`


const TitlePage = ({ title }) => {
    return <TitleStyle>{title}</TitleStyle>;
};

export default TitlePage
