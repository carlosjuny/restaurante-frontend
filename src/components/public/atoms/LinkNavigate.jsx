import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkStyle = styled(Link)`
  color: #32312C;
  font-size: 16px;
  transition: all 0.4s;

  &:hover {
    color: #707070;
    transition: all 0.4s;
  }
`;

const LinkNavigate = ({ to, children, onClick, className }) => {
  return (
    <LinkStyle to={to} onClick={onClick} className={className}>
      {children}
    </LinkStyle>
  );
};

LinkNavigate.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default LinkNavigate;
