import styled from "styled-components"
import SliderPromotion from "../../molecules/SliderPromotion"
import Text from "../../atoms/Text"

const HomeSlider = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #000;
`

const TextStyle = styled(Text)`
    background: none;
    width: 350px;
    height: 30px;
    position: absolute;
    top: 20px;    
    font-size: 28px;

`

const HomeSectionFour = () => {
  return (
    <HomeSlider>
        <TextStyle>
          <h1>Promociones</h1>
        </TextStyle>
        <SliderPromotion />
    </HomeSlider>
  )
}

export default HomeSectionFour