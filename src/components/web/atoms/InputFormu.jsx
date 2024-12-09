import styled from "styled-components";

const InputFormu = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: 1px solid #F4D976;
  padding: 8px;
  font-size: 16px;
  color: #ffffff;
`;

const InputForm = ({ placeholder }) => {
  return <InputFormu type="text" placeholder={placeholder} />;
};

export default InputForm;
