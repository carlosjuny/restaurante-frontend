import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ButtonCrud from "../../admin/atoms/ButtonCrud";
import DataTable from "react-data-table-component";
import InputSearch from "../../public/atoms/InputSearch";
import ModalCrud from "./ModalCrud";
import apiRoutes from "../../../config/apiRoutes";
import useCrud from "../../../hooks/useCrud";
import columnsConfig from "../../../config/columnsConfig";

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

const Crud = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const endpoint = apiRoutes[path] || "";
  const { data, remove } = useCrud(endpoint);
  const columns = columnsConfig[path] || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <List>
      <div className="Buttom">
        <ButtonCrud label="Agregar" onClick={() => setModalOpen(true)} />
        <InputSearch type="text" className="input" />
      </div>
      <DataTable
        columns={[
          ...columns,
          {
            name: "Acciones",
            cell: (row) => (
              <>
                <button onClick={() => handleEdit(row)}>✏️ Editar</button>
                <button onClick={() => remove(row.id)}>🗑️ Eliminar</button>
              </>
            ),
          },
        ]}
        data={data}
        selectableRows
        pagination
        fixedHeader
      />
      <ModalCrud isOpen={modalOpen} onClose={handleClose} title={selectedItem ? "Editar" : "Agregar"}>
        <p>Aquí va el formulario...</p>
      </ModalCrud>
    </List>
  );
};

export default Crud;
