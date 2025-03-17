import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const ModalHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #EFD574;
  color: #1f1e1e;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #EFD574;
  }
`;

const CartModal = ({ isOpen, handleCloseCart }) => {
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={handleCloseCart}></ModalOverlay>
      <ModalContainer isOpen={isOpen}>
        <ModalHeader>Carrito</ModalHeader>
        <div>
          <CartItem>
            <span>Platillo</span>
            <span>$10.00</span>
          </CartItem>
          <CartItem>
            <span>Platillo</span>
            <span>$15.00</span>
          </CartItem>
          <CartItem>
            <span>Platillo</span>
            <span>$25.00</span>
          </CartItem>
        </div>
        <div>
          <Button onClick={handleCloseCart}>Close</Button>
        </div>
      </ModalContainer>
    </>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
};

export default CartModal;
