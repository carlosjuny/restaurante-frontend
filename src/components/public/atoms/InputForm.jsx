import styled from "styled-components";
import PropsTypes from 'prop-types'

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: 1px solid #c1c1c1;
  padding: 8px;
  font-size: 16px;
  color: #ffffff;
`;

const InputForm = ({ value, placeholder, type = "text", onChange }) => {
  return <InputStyle type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

InputForm.propTypes = {
  placeholder: PropsTypes.string.isRequired,
  type: PropsTypes.string,
  value: PropsTypes.string,
  onChange: PropsTypes.func.isRequired,
};

export default InputForm;

