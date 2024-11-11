import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.div`
    display: flex;
    width: 50%;
    height: 50%;

img {
    width: 100%;
    box-shadow: 15px 15px 5px 2px #353434;
} 

@media screen and  (min-width: 768px) { 
    width: 40%;
}

@media (min-width: 1024px) {
    width: 30%;
}
`

const Image = ({ img }) => {
  return (
    <ImageStyle >
        {img}
    </ImageStyle>
  )
}

export default Image
