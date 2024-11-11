import React from 'react'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import styled from 'styled-components'
import img1 from '../../../assets/image/about_section_1.jpg'


const SectionStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   height: 100%;
   align-items: center;
   padding: 60px;
   padding-top: 50px;
   padding-bottom: 50px;

   img {
    box-shadow: 4px 4px 4px 1px rgba(56, 56, 56, 0.25), 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    animation: float 3s ease-in-out infinite;
   }

   .aboutText {
    width: 100%;
    font-size: 18px;
    text-align: justify;
    background: none;
    color: #32312C;
   }

   @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
   }

@media (min-width: 768px) {
  img {
    width: 35rem;
    margin-left: -8rem;
  }
}

@media (min-width: 1024px) {
  position: relative;
  justify-content: center;
  flex-direction: row;


  .aboutText {
    width: 50%;
    margin-left: 12rem;
    font-size: 20px;
  }

  img {
    width: 30rem;
    margin-left: 0rem;
  }
}

@media (min-width: 1440px) {
  .aboutText {
    width: 35%;
    margin-left: 3rem;
  }
}
`

const AboutSection_1 = () => {
  return (
    <SectionStyle>
        <Image img={<img src={img1} alt="About section 1"/>}/>
        <Text className={'aboutText'}><p>En La Dicha, llevamos más de siete años dedicados a brindar 
            una experiencia gastronómica única a nuestros clientes. Somos
            un restaurante comprometido con la calidad, donde cada plato
            es cuidadosamente preparado a gusto de nuestros comensales, 
            utilizando ingredientes frescos y técnicas culinarias que combinan
            tradición y creatividad. ¡Te esperamos para compartir juntos el placer de la buena mesa!</p></Text>
    </SectionStyle>
  )
}

export default AboutSection_1
