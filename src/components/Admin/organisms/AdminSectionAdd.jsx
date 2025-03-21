import styled from 'styled-components';
import Form from '../../public/molecules/Form';
import InputForm from '../../public/atoms/InputForm';
import Button from '../../public/atoms/Button';
import IconSvg from '../../public/atoms/IconSvg';
import { useNavigate } from "react-router-dom";

const SectionStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: flex;
    overflow: hidden;
    
    .title {
      margin-bottom: 0;
    }

    .input {
      display: flex;
      width: 100%;
      gap: 30px;
    }

    .Button {
      position: absolute;
      bottom: 0;
    }

    .ButtonAdd {
      background-color: #373737;
      color: #FFFFFF;
      transition: all 0.5s;
      border: 1px solid #373737;
    }

    .ButtonAdd:hover {
      border: 1px solid #373737;
      background-color: #FFFFFF;
      color: #373737;
      transition: all 0.5s;
    }

    .svg {
      position: absolute;
      left: 205px;
      top: 50px;
      cursor: pointer;
    }
`
const FormStyle = styled(Form)`
  position: relative;
  width: 60%;
  height: 80%;
  top: -20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid #c1c1c1;
  padding: 50px;
`

const AdminSectionAdd = () => {

  const navigate = useNavigate();

  return (
    <SectionStyle>
      <div className='svg'>
        <IconSvg name='Back' size='40' onClick={() => navigate(-1)}/>
      </div>
      <FormStyle>
        <h1 className='title'>Agregar Producto</h1>
        <div className='input'>
          <InputForm placeholder='Nombre del Producto' />
          <InputForm placeholder='Dato del Producto' />
        </div>
        <div className='input'>
          <InputForm placeholder='Dato del Producto' />
          <InputForm placeholder='Dato del Producto' />
        </div>
        <div className='Button'>
          <Button className='ButtonAdd'>Guardar</Button>
        </div>
      </FormStyle>
    </SectionStyle>
  )
}

export default AdminSectionAdd
