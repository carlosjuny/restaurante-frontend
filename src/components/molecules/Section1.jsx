import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/image/home_section_1.png'

const Section_1 =styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;

    img {
        width: 23rem;
        height: 23rem;
        box-shadow: 15px 15px 5px 2px #353434;
        margin-bottom: 3.5rem;
    }
    
    .text {
        width: 75%;
        left: -6rem;
        line-height: 45px;
        padding: 2rem 2rem;
        background-color: #353434;
        color: #ffffff;
    }

@media screen and  (min-width: 768px) { 
      
    flex-direction: row !important;

    img {
        width: 20rem;
        height: 20rem;
        margin-top: -24rem;
        margin-left: 1rem;
    }
    
    .line {
        position: relative;
        margin: auto;
        left: 0.2rem;
        top: 0;
        width: 0.1rem;
        height: 850px;
        background-color: #353434;
    }

    .text {
        width: 50% !important;
        font-size: 14px;
        margin-right: 1rem;
        margin-top: -24rem;
    }
}

@media screen and   (min-width: 1024px) {    
    img {
        margin-left: 3.5rem;
    }

    .text {
        font-size: 16px;
        margin-top: -21rem;
        margin-right: 3rem;
    }
}

`

const Section1 = () => {
  return (
    <Section_1>
        <img src={img1} />
        <div className='line'></div>
        <div className='text'>
            <p>En "La Dicha", nos enorgullece ofrecer una selecciòn cuidadosamente elaborada de platillos 
            que reflejan la frescura de los ingredientes locales y la pasión de nuestro talentoso equipo 
            de chefs. Desde nuestras entradas irresistibles hasta nuestros postres tentadores, cada 
            plato està diseñado para deleitar sus sentidos y transportarlo a un mundo de sabores 
            auténticos.</p>
        </div>
    </Section_1>
  )
}

export default Section1