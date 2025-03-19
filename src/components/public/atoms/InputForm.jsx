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

const InputForm = ({ placeholder, type = "text" }) => {
  return <InputStyle type={type} placeholder={placeholder} />;
};

InputForm.propTypes = {
  placeholder: PropsTypes.string.isRequired,
  type: PropsTypes.string
};

export default InputForm;

