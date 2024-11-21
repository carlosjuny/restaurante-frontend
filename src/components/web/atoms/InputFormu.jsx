import styled from "styled-components";

const InputFormu = styled.input`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  color: #333;
`;

const InputForm = ({ placeholder }) => {
  return <InputFormu type="text" placeholder={placeholder} />;
};

export default InputForm;
