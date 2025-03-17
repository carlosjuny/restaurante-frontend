import styled from 'styled-components'
import img1 from '../../../assets/images/admin/admin_section_2.jpg'
// import ListBackground from '../atoms/ListBackground'


const SectionStyle = styled.div`
    position: fixed;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;  
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: flex;
    overflow: hidden;
`

const AdminSection_1 = () => {
  return (
    <SectionStyle>
      {/* <ListBackground /> */}
    </SectionStyle>
  )
}

export default AdminSection_1
