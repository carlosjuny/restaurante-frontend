import styled from 'styled-components'
import img1 from '../../../assets/image/admin_section_2.jpg'
import ListBackground from '../atoms/ListBackground'
import FormList from '../atoms/FormList'


const SectionStyle = styled.div`
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: flex;
`

const AdminSection_1 = () => {
  return (
    <SectionStyle>
      <ListBackground />
      <FormList />
    </SectionStyle>
  )
}

export default AdminSection_1
