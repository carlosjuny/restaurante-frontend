import styled from 'styled-components'
import PropsTypes from 'prop-types'

const TextStyle = styled.div`
    width: 70%;
    line-height: 45px;
    padding: 2rem 2rem;
    color: #ffffff;

@media (min-width: 768px) {
    width: 50%;
}

@media (min-width: 1024px) {
    width: 38%;
    font-size: 22px;
}
`

const Text = ({children, className}) => {
  return (
    <TextStyle className={className}>
        {children} 
    </TextStyle>
  )
}

Text.propTypes = {
  children: PropsTypes.node.isRequired,
  className: PropsTypes.string
}

export default Text
