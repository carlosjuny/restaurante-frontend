import React from 'react'
import styled from 'styled-components'
import Section1 from '../../../assets/image/about_section_1.jpg'


const SectionStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 100px;

   img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 1px rgba(56, 56, 56, 0.25), 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    animation: float 3s ease-in-out infinite;
   }

   p {
    width: 40%;
    font-size: 18px;
    padding-left: 30px;
    text-align: justify;
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
`

const AboutSection_1 = () => {
  return (
    <SectionStyle>
        <img src={Section1}/>
        <p>En La Dicha, llevamos más de siete años dedicados a brindar 
            una experiencia gastronómica única a nuestros clientes. Somos
            un restaurante comprometido con la calidad, donde cada plato
            es cuidadosamente preparado a gusto de nuestros comensales, 
            utilizando ingredientes frescos y técnicas culinarias que combinan
            tradición y creatividad. Nuestro equipo se esmera en ofrecer un 
            ambiente acogedor y un servicio que hará de tu visita un momento 
            memorable. Ven y descubre por qué La Dicha es sinónimo de excelencia en 
            cada bocado. ¡Te esperamos para compartir juntos el placer de la buena mesa!</p>
    </SectionStyle>
  )
}

export default AboutSection_1
