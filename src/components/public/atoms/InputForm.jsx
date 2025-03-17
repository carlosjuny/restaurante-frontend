import styled from "styled-components";
import PropsTypes from 'prop-types'

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: 1px solid #F4D976;
  padding: 8px;
  font-size: 16px;
  color: #ffffff;
`;

const InputForm = ({ placeholder }) => {
  return <InputStyle type="text" placeholder={placeholder} />;
};

InputForm.propTypes = {
  placeholder: PropsTypes.string.isRequired
}

export default InputForm;
