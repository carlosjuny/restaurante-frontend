import styled from "styled-components";
import PropTypes from "prop-types";

const DinerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 5px;
`;

const LabelStyle = styled.label`
  font-weight: bold;
`;

const SelectStyle = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

const InputDiner = ({ labelName, options, value, onChange }) => {
  return (
    <DinerStyle>
      <LabelStyle>{labelName}</LabelStyle>
      <SelectStyle value={value} onChange={onChange}>
        <option value="" disabled>Selecciona una opción</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectStyle>
    </DinerStyle>
  );
};

InputDiner.propTypes = {
  labelName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDiner;
