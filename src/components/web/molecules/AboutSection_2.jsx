import React from 'react'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import styled from 'styled-components'
import img2 from '../../../assets/image/about_section_2.jpg'

const SectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    
    .aboutText {
        background: none;
        color: #32312C;
        font-size: 18px;
    }

@media (min-width: 768px) {
    flex-direction: row;

    .aboutText {
        justify-content: justify;
    }
}

@media (min-width: 1024px) {
    .aboutText {
        font-size: 20px;
    }
}
`

const AboutSection_2 = () => {
  return (
    <SectionStyle>
        <Text className={'aboutText'}><p>En La Dicha, celebramos el placer de compartir buenos 
            momentos y mejor comida. Con más de siete años de experiencia, 
            ofrecemos un menú preparado a la medida de cada comensal, en 
            un ambiente cálido y acogedor. ¡Ven y vive una experiencia gastronómica
            que te hará volver!</p></Text>
        <Image img={<img src={img2} alt="About section 2"/>}/>
    </SectionStyle>
  )
}

export default AboutSection_2