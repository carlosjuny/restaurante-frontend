import styled from "styled-components";
import DividerTop from "../atoms/DividerTop";
import DividerBottom from "../atoms/DividerBottom";


const HomeD = styled.div`
    /* display: flex; */
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/image/about_restaurant_2.jpg);
    overflow: hidden;
`

const HomeSectionD = () => {
  return (
    <HomeD>
        <DividerTop svgFill="#F9ECBA"/>
        <DividerBottom svgFill = "#000"/>
    </HomeD>
  )
}

export default HomeSectionD