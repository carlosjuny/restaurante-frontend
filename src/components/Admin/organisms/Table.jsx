import styled from "styled-components";
import TableRow from "../molecules/TableRow";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
`;

const Table = ({ rows }) => {
  return (
    <TableContainer>
      <TableRow data={{ cell1: "Nombre", cell2: "Edad", cell3: "Ciudad", }} />
      <TableRow data={{ cell1: "Juan", cell2: 28, cell3: "Madrid" }} />
      <TableRow data={{ cell1: "Ana", cell2: 22, cell3: "Barcelona" }} />
      <TableRow data={{ cell1: "Pedro", cell2: 35, cell3: "Valencia" }} />
    </TableContainer>
  );
};

export default Table;
