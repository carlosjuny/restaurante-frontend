import React from 'react'
import img1 from '../../assets/image/home_section_2.png'
import styled from 'styled-components'

const Section_2 =styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    margin-bottom: 3rem;

    img {
        width: 95%;
        box-shadow: 15px 15px 5px 2px #353434;
    }
    
    .text {
        width: 75%;
        left: -6rem;
        line-height: 45px;
        padding: 2rem 2rem;
        background-color: #353434;
        color: #ffffff;
        margin-bottom: 3.5rem;
    }

@media screen and  (min-width: 768px) { 
      
      flex-direction: row !important;
  
      img {
        width: 55%;
        margin-top: -35rem;
        margin-left: 3.5rem;
      }
      
      .line {
        position: absolute;
        left: 2rem;
        margin-top: -58rem;
        width: 800px;
        height: 0.2rem;
        background-color: #353434;
      }
  
      .text {
        width: 35% !important;
        font-size: 14px;
        margin-left: 2rem;
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

      .line {
        width: 1000px;
      }
}

`

const Section2 = () => {
  return (
    <Section_2>
        <div className='text'>
            <p>Bienvenidos a "La Dicha", un rincòn gastronómico donde la alegrìa 
                se fusiona con los sabores exquisitos. En el corazòn de nuestra 
                cocina, encontrarà una experiencia culinaria ùnica que combina la 
                tradición con la innovación, creando momentos de felicidad en cada bocado.</p>
        </div>
        <div className='line'></div>
        <img src={img1} />
    </Section_2>
  )
}

export default Section2