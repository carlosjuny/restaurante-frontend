import styled from 'styled-components'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import img1 from '../../../assets/image/home_section_2.png'

const Section_2 =styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #3534345a;
    overflow: hidden;
    gap: 60px;

@media screen and  (min-width: 768px) { 
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    padding: 30px;
}

@media screen and   (min-width: 1024px) {
    justify-content: space-around;
    gap: 0;
    padding-top: 80px;
    padding-bottom: 80px;

    img {
      width: 30rem;
      margin-left: -9rem;
    }

@media screen and  (min-width: 1440px) {

    img {
      min-width: 50rem;
      margin-left: -15rem;
        }
    }
}
`

const TextStyle = styled(Text)`
  background: none;
  color: #32312C;
`

const HomeSection_2 = () => {
  return (
    <Section_2>
        <TextStyle><h1>Sabores Que Inspiran</h1><p>En nuestro menú descubrirás una cuidadosa selección 
          de platillos elaborados con los ingredientes más frescos y de la más alta calidad.
          combinando sabores auténticos con una presentación sofisticada. Desde entradas irresistibles 
          hasta postres exquisitos, cada bocado está pensado para deleitar tu paladar y hacer de cada 
          visita una ocasión especial.</p></TextStyle>
        <Image img={<img src={img1} alt="Home section 2"/>} />
    </Section_2>
  )
}

export default HomeSection_2