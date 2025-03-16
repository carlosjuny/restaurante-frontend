import styled from 'styled-components'
import PropsTypes from 'prop-types'

const IconStyle = styled.div`
    display: flex;

img {
  width: 50px;
} 

@media (min-width: 768px) { 
}

@media (min-width: 1024px) {
}
`

const IconAdmin = ({ iconSrc  }) => {
  return (
    <IconStyle >
        <img src={iconSrc} alt="icon" />
    </IconStyle>
  )
}

IconAdmin.propsTypes = {
  iconSrc: PropsTypes.string.isRequired
}

export default IconAdmin
