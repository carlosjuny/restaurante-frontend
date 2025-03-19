import Navbar from '../../organisms/layouts/Navbar';
import styled from 'styled-components';
import BarTop from '../../molecules/BarTop';
import Input from '../../atoms/InputSearch';
import promoVideo from '../../../../assets/video/Video-Promocional.mp4'
import Text from '../../atoms/Text';

const StyleHeader = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const VideoBanner = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.548);
  z-index: 0;
`;

const Textstyle = styled(Text)`
  width: 100%;
  position: absolute;
  z-index: 2;
  background: none;
  font-size: 30px;
  text-align: center;
  top: 50%;
`

const Header = () => {

  return (
    <StyleHeader>
      <BarTop />
      <Navbar />
      <Textstyle>
        <h1>Bienvenido al</h1>
        <h1>Restaurante La Dicha</h1>
      </Textstyle>
      <VideoBanner autoPlay loop muted playsInline>
        <source src={promoVideo} type="video/mp4" />
      </VideoBanner>
      <Background />
      <Input onChange={(e) => console.log(e.target.value)} />
    </StyleHeader>
  );
};

export default Header;
