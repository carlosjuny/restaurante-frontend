import styled from "styled-components"
import FormList from "./FormList"

const Background = styled.div`
    position: relative;
    display: flex;
    margin: auto; 
    padding-left: 30px;
    padding-right: 30px;
    width: 90vw;
    height: 90vh;
    align-self: center;
    background-color: rgba(53, 52, 52, 0.71);
    top: -20px;
    border-radius: 5px;
    overflow: hidden;
`

const ListBackground = () => {
  return (
    <Background>
      <FormList /> 
    </Background>
  )
}

export default ListBackground
