import styled from 'styled-components'
import FilterProduct from '../../molecules/FilterProduct'
import CardProduct from '../../molecules/CardProduct'

const Section_1_Styles = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuSection_1 = () => {
  return (
    <Section_1_Styles>
        <FilterProduct />
        <CardProduct />
    </Section_1_Styles>
  )
}

export default MenuSection_1
