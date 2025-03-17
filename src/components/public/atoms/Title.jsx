import styled from 'styled-components'
import PropsTypes from 'prop-types'

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
  }
`

const Title = ({ title }) => {
    return <TitleStyle>{title}</TitleStyle>;
};

Title.propTypes = {
  title: PropsTypes.string.isRequired
}

export default Title
