import React from 'react'
import styled from 'styled-components'
import img1 from '../../../assets/image/admin_section_1.png'


const SectionStyle = styled.div`
    background-image: url(${img1});
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;  
    width: 100%;
    height: 100vh;
    object-fit: cover; 
`

const AdminSection_1 = () => {
  return (
    <SectionStyle>
    </SectionStyle>
  )
}

export default AdminSection_1
