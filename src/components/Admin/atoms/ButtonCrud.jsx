import styled from "styled-components"
import PropTypes from 'prop-types';

const StyleCRUD = styled.div`
    width: 150px;
    height: 40px;
    background-color: #353434;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    color: #ffffff;

    &:hover {
        background-color: #F4D976;
        color: #353434;
        border: 1px solid #353434;
        transition: .3s ease;
        cursor: pointer;
    }
`

const ButtonCrud = ({ label, onClick }) => {
    return <StyleCRUD onClick={onClick}>{label}</StyleCRUD>
  };

ButtonCrud.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
  

export default ButtonCrud;
