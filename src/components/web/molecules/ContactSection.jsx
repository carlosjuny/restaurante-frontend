import React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import FormCard from '../atoms/FormCard'
import img1 from '../../../assets/image/contact_section_1.png'

const SectionStyle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        box-shadow: none;
    }
`

const ContactSection = () => {
  return (
    <SectionStyle>
        <Image img={<img src={img1} alt='Contact Section'/>}/>
        <FormCard>     
        </FormCard>
    </SectionStyle>
  )
}

export default ContactSection