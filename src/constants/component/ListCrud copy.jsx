import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ButtonCrud from "../../components/admin/atoms/ButtonCrud";
import DataTable from "react-data-table-component";
import InputSearch from "../../components/public/atoms/InputSearch";

const List = styled.div`
  display: flex;
  padding: 50px;
  width: 90%;
  height: 85vh;
  background-color: #ffffffcf;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const apiRoutes = {
  "/admin/mesas": "http://127.0.0.1:8000/api/mesas",
  "/admin/usuarios": "http://127.0.0.1:8000/api/usuarios",
  "/admin/productos": "http://127.0.0.1:8000/api/productos",
  "/admin/clientes": "http://127.0.0.1:8000/api/clientes",
};

const columnsConfig = {
  "/admin/mesas": [
    { name: "Número de Mesa", selector: (row) => row.numero_mesa, sortable: true },
    { name: "Capacidad", selector: (row) => row.capacidad, sortable: true },
    { name: "Ubicación", selector: (row) => row.ubicacion, sortable: true },
    { name: "Estado", selector: (row) => row.estado, sortable: true },
  ],
  "/admin/usuarios": [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Correo", selector: (row) => row.email, sortable: true },
    { name: "Rol", selector: (row) => row.rol, sortable: true },
  ],
  "/admin/productos": [
    { name: "Nombre del Producto", selector: (row) => row.nombre, sortable: true },
    { name: "Precio", selector: (row) => row.precio, sortable: true },
    { name: "Stock", selector: (row) => row.stock, sortable: true },
  ],
  "/admin/clientes": [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Apellido", selector: (row) => row.apellido, sortable: true },
    { name: "Teléfono", selector: (row) => row.telefono, sortable: true },
  ],
};

const ListCrud = () => {
  const location = useLocation();
  const [apiUrl, setApiUrl] = useState("");
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (apiRoutes[location.pathname]) {
      const newApiUrl = apiRoutes[location.pathname];
      setApiUrl(newApiUrl);
      setColumns(columnsConfig[location.pathname] || []);

      // Fetch data from API
      fetch(newApiUrl)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [location.pathname]);

  return (
    <List>
      <div className="Buttom">
        <ButtonCrud label="Agregar" />
        <InputSearch type="text" className="input" />
      </div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        onSelectedRowsChange={(data) => console.log(data)}
        pagination
        fixedHeader
      />
    </List>
  );
};

export default ListCrud;
