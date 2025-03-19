import styled from 'styled-components'
import FilterProduct from '../../molecules/FilterProduct'
import CardProduct from '../../molecules/CardProduct'
import CardDiner from '../../molecules/CardDiner'
import Text from '../../../public/atoms/Text'

const Section_1_Styles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding-right: 50px;

    .product {
      /* width: 100%; */
    }

    .diner {
      /* width: 30%; */
      padding-top: 60px;
      align-items: center;
      justify-content: center;
    }

@media (min-width: 768px) {
  flex-direction: row;
  align-items: normal;
  .product {
    width: 70%;
  }
  .diner {
    width: 30%;
  }
}
`

const TextStyle = styled(Text)`
      color: #000;
      left: 40px;
      width: 60%;
  h1 {
    margin-bottom: -40px;
  }
`

const MenuSection_1 = () => {
  return (
    <Section_1_Styles>
        <div className='product'>
      <TextStyle><h1>Nuestro Menú</h1></TextStyle>
        <FilterProduct />
        <CardProduct />
        </div>
        <div className='diner'>
          <CardDiner />
        </div>
    </Section_1_Styles>
  )
}

export default MenuSection_1
