import styled from 'styled-components'

const IconStyle = styled.div`
    display: flex;
    width: 8%;
    height: 8%;

img {
  width: 2.8%;
  height: 5.6%;
} 

@media screen and  (min-width: 768px) { 
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

export default IconAdmin
