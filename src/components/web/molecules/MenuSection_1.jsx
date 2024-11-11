import React from 'react'
import styled from 'styled-components'
import ButtonSelect from '../atoms/ButtonSelect'
import Card from '../molecules/Card'

const Section_1_Styles = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuSection_1 = () => {
  return (
    <Section_1_Styles>
        <ButtonSelect />
        <Card />
    </Section_1_Styles>
  )
}

export default MenuSection_1
