import axios from "axios";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import IconSvg from '../../public/atoms/IconSvg';

const Table = ({ columns, apiUrl, title, onUpdate, onDelete, onConsult }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setFilteredData(response.data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, [apiUrl]);

  const actionColumn = {
    name: 'Acciones',
    selector: 'acciones',
    cell: (row) => (
      <div style={{ display: 'flex', gap: '10px', cursor: 'pointer', }}>
        <IconSvg name="EditIcon" size={30} onClick={() => onConsult(row)} />
        <IconSvg name="EditIcon" size={30} onClick={() => onUpdate(row)} />
        <IconSvg name="DeleteIcon" size={30} onClick={() => onDelete(row)} />
      </div>
    ),
  };

  const enhancedColumns = [...columns, actionColumn];

  return (
    <div style={{ width: "100%" }}>
      <h2>{title}</h2>
      <DataTable
        columns={enhancedColumns}
        data={filteredData}
        selectableRows
        pagination
        fixedHeader
      />
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  apiUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onConsult: PropTypes.func.isRequired,
};

export default Table;
