import styled from 'styled-components'
import ListCrurd from '../../admin/molecules/ListCrud'

const SectionStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: flex;
    overflow: hidden;
`

const AdminSection_1 = () => {
  return (
    <SectionStyle>
      <ListCrurd />
    </SectionStyle>
  )
}

export default AdminSection_1
