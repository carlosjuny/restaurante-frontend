import styled from 'styled-components';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkStyle = styled.a`
    color: #32312C;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.4s;

    &:hover {
      color: #707070;
      transition: all 0.4s;
    }
`

const LinkNavigate = ({ children, onClick }) => {
  return (
    <LinkStyle onClick={onClick}>
        <Link to='/'>
        {children}
        </Link>
    </LinkStyle>
  )
};

LinkNavigate.propTypes = {
    children: PropsTypes.string.isRequired,
    onClick: PropsTypes.func.isRequired
}

export default LinkNavigate
