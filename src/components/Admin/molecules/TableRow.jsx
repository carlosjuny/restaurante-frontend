import styled from "styled-components";
import TableCell from "../atoms/TableCell";

const Row = styled.div`
  display: flex;
`;

const TableRow = ({ data }) => {
  return (
    <Row>
      <TableCell>{data.cell1}</TableCell>
      <TableCell>{data.cell2}</TableCell>
      <TableCell>{data.cell3}</TableCell>
    </Row>
  );
};

export default TableRow;
