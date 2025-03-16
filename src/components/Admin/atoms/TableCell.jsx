import styled from "styled-components";
import PropTypes from "prop-types";

const Cell = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const TableCell = ({ children }) => {
  return <Cell>{children}</Cell>;
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableCell;
