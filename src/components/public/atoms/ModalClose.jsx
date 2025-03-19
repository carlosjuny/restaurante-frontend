import styled from 'styled-components';
import PropsTypes from 'prop-types';

const Button = styled.button`
  position: absolute;
  top: 0;
  width: 30px;
  height: 35px;
  right: -30px;
  font-size: 25px;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: none;
  border: none;
  color: #000;
  background-color: #FFFFFF;
  cursor: pointer;
  z-index: 8;
`;

const ModalClose = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} aria-label="Close modal">
      &times;{children}
    </Button>
  );
};

ModalClose.propTypes = {
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.node.isRequired,
}

export default ModalClose;
