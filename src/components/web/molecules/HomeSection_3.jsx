import React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import img1 from '../../../assets/image/home_section_3.jpg'
import BtnOrder from '../atoms/BtnOrder'


const Section_3 =styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-bottom: 3rem;
    padding-top: 50px;
    padding-bottom: 50px;

    img {
        width: 35rem;
        margin-left: -8rem;
        box-shadow: none;
    }

    .textSection3 {
        height: 400px;
        background-color: #353434ba;
    }

@media screen and (min-width: 768px){
    flex-direction: row ;
    justify-content: space-evenly;

    img {
        width: 30rem;
        margin-left: -1rem;
    }

    .textSection3 h1 {
        margin-top: 3rem;
    }

@media screen and (min-width: 1024px){

    padding-top: 80px;
    padding-bottom: 80px;

    img {
        width: 35rem;
        }
    
    .textSection3 {
        width: 45%;
        height: 500px;
        margin-left: 5rem;
        }
    
    }

@media screen and (min-width: 1440px){
    img {
        width: 40rem;
        }

    .textSection3 {
        width: 35rem;
        margin-left: -10rem;
        }
    }
}
`

const HomeSection_3 = () => {
  return (
    <Section_3>
        <Image img={<img src={img1} alt="Home section 1"/>} />
        <Text className={'textSection3'}>
            <p>Selecciona tu favorito de los 5 del menù.</p>
            <h1>¡ORDENALO YA!</h1>
        </Text>
    <BtnOrder>Aquí</BtnOrder>
    </Section_3>
  )
}

export default HomeSection_3