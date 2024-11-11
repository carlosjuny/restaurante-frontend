import React from 'react'
import styled from 'styled-components'


const TextStyle = styled.div`
    width: 70%;
    height: 75%;
    line-height: 45px;
    padding: 2rem 2rem;
    background-color: #353434;
    color: #ffffff;

@media (min-width: 768px) {
    width: 50%;
}

@media (min-width: 1024px) {
    width: 33%;
    height: 500px;
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

export default Text
