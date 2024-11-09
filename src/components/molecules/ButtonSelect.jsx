import React from 'react'
import styled from 'styled-components'
import Icon from '../../assets/image/google_plus_icon.png'

const SelectStyle = styled.button`
    
`

const ButtonSelect = () => {
  return (
    <SelectStyle>
        <div className='Select'>
            <div className='BtnSelect'><img src={Icon}/></div>
            <div className='BtnSelect'><img src={Icon}/></div>
            <div className='BtnSelect'><img src={Icon}/></div>
        </div>
    </SelectStyle>
  )
}

export default ButtonSelect