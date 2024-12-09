import styled from 'styled-components';
import Slide1 from '../../../assets/image/slider_image_1.jpg';
import ButtonNavegation from '../atoms/ButtonNavegation';
import Text from '../atoms/Text';

const StyleMainSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: -118px;

  .gray-section {
    background-color: #161616;
    flex: 0.6;
  }

  .image-section {
    flex: 1;
    background: url(${Slide1}) no-repeat center center/cover;
  }

  .button-navegation {
    position: absolute;
    top: 30%;
    left: 8%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;

const StyleText = styled.div`
  position: absolute;
  background: none;
  top: 220px;
  font-size: 30px;
  color: #F4D976;
`

const HeaderTwo = () => {
  return (
    <StyleMainSection>
      <div className="gray-section"></div>
      <div className="button-navegation">
        <StyleText><h1>Bienvenido</h1></StyleText>
        <ButtonNavegation>Ver nuestro menú</ButtonNavegation>
      </div>
      <div className="image-section"></div>
    </StyleMainSection>
  );
};

export default HeaderTwo;
