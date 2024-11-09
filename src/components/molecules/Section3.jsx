import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/image/home_section_3.jpg'
import BtnOrder from '../atoms/BtnOrder'


const Section_3 =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 3rem;
    align-items: center;


    img {
        width: 75%;
        height: 80%;
    }

    .text {
        width: 80%;
        height: 400px;
        margin-top: -2rem;
        background-color: #333333b9;
        text-align: center;
        color: #ffffff;
    }

    .text p {
        margin-top: 5rem;
        margin-bottom: 4rem;
    }

    .text h1 {
        font-size: 35px;
    }

@media screen and (min-width: 768px){

    flex-direction: row !important;

    img {
        width: 50%;
        margin-left: 3rem;
    }

    .text {
        position: absolute;
        width: 45%;
        background-color: #333333b9;
        right: 3rem;
    }

@media screen and (min-width: 1024px){
    img {
        width: 45%;
        margin-left: 6rem;
    }

    .text{
        width: 40%;
        right: 6rem;
    }
}

}

`


const Section3 = () => {
  return (
    <Section_3>
        <img src={img1} />
        <div className='text'>
            <p>Selecciona tu favorito de los 5 del menù</p>
            <h1>!ORDENALO YA¡</h1>
        </div>
    <BtnOrder>
    </BtnOrder>
    </Section_3>
  )
}

export default Section3