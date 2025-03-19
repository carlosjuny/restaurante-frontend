import styled from "styled-components";
import PropTypes from "prop-types";

const FormStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  /* flex-direction: column; */
  /* padding: 40px; */
  gap: 20px;

  /* input {
    position: relative;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #c1c1c1;
  }

  textarea {
    position: relative;
    width: 100%;
    height: 10rem;
    padding: 8px;
    background: none;
    border: 1px solid #c1c1c1;
    color: #ffffff;
    font-size: 16px;
    resize: none;
  }

  .button {
    width: 50%;
    height: 50px;
    top: 15px;
    left: 20%;
    background-color: #343434;
    font-weight: 600;
    border-radius: 5px;
    font-size: 18px;
    transition: all 0.5s;

    &:hover {
      background-color: #ffffff;
      color: #343434;
    }
  }

  @media (min-width: 1024px) {
    textarea {
      height: 100%;
    }

    button {
      height: 30%;
    }

    .button {
      height: 85px;
    }
  }

  @media (min-width: 1440px) {
    button {
      height: 15%;
    }
  } */
`;

const Form = ({ className, style, children }) => {
  return (
    <FormStyle className={className} style={style}>
      {children}
    </FormStyle>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Form;
