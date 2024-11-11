import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = ({ icon }) => {
  return (
    <IconStyle>
      {icon}
    </IconStyle>
  );
};

export default Icon;
