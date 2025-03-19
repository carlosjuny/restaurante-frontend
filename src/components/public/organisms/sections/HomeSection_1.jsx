import styled from 'styled-components'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import img1 from '../../../../assets/images/public/home_section_1.png'

const Section_1 =styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    padding-bottom: 50px;
    gap: 60px;
    overflow: hidden;


    
@media screen and  (min-width: 768px) { 
    flex-direction: row ;
    gap: 30px;
}

@media screen and   (min-width: 1024px) {
    gap: 0;
    padding-bottom: 80px;
}
`

const TextStyle = styled(Text)`
    background: none;
    color: #000;
    top: -10px;
    left: 20px;
    width: 40%;

    h1 {
      width: 60vw;
    }

    p {
      margin-top: 15px;
    }

    @media (min-width: 768px) {
      h1 {
        width: 50vw;
      top: 30px;
      }
    }
`

const HomeSection_1 = () => {
  return (
    <Section_1>
        <Image img={img1} alt="Home section 1" />
        <TextStyle><h1>Nuestra Especialización Gourmet</h1><p>En La Dicha, nos enorgullece ofrecer una selecciòn cuidadosamente elaborada de platillos 
            que reflejan la frescura de los ingredientes locales y la pasión de nuestro talentoso equipo 
            de chefs. Desde nuestras entradas irresistibles hasta nuestros postres tentadores, cada 
            plato està diseñado para deleitar sus sentidos y transportarlo a un mundo de sabores 
            auténticos.</p></TextStyle>
    </Section_1>
  )
}

export default HomeSection_1