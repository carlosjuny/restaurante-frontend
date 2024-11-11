import React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import img1 from '../../../assets/image/home_section_1.png'

const Section_1 =styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
    padding-top: 50px;
    padding-bottom: 50px;
    gap: 60px;
    overflow: hidden;

@media screen and  (min-width: 768px) { 
    flex-direction: row ;
    margin: auto;
    max-width: 100%;    
    padding-top: 60px;
    gap: 30px;
}

@media screen and   (min-width: 1024px) {
    gap: 0;
    padding-top: 80px;
    padding-bottom: 80px;
}
`

const HomeSection_1 = () => {
  return (
    <Section_1>
        <Image img={<img src={img1} alt="Home section 1"/>} />
        <Text><p>En "La Dicha", nos enorgullece ofrecer una selecciòn cuidadosamente elaborada de platillos 
            que reflejan la frescura de los ingredientes locales y la pasión de nuestro talentoso equipo 
            de chefs. Desde nuestras entradas irresistibles hasta nuestros postres tentadores, cada 
            plato està diseñado para deleitar sus sentidos y transportarlo a un mundo de sabores 
            auténticos.</p></Text>
    </Section_1>
  )
}

export default HomeSection_1