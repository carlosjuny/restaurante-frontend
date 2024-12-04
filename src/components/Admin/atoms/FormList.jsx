import styled from "styled-components";
import CRUD from "./CRUD";

const List = styled.div`
  position: absolute;
  display: flex;
  padding: 50px;
  width: 68%;
  height: 85%;
  background-color: #ffffffcf;
  bottom: 0%;
  left: 16%;
  border-radius: 5px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const handleClick = () => {
    alert("Acción del botón ejecutada");
  };

const FormList = () => {
  return (
    <List >
      <CRUD label="Consultar" onClick={handleClick} />
      <CRUD label="Crear" onClick={handleClick} />
      <CRUD label="Actualizar" onClick={handleClick} />
      <CRUD label="Eliminar" onClick={handleClick} />
    </List>
  );
};

export default FormList;
