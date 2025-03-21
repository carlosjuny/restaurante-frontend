import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ButtonCrud from "../../admin/atoms/ButtonCrud";
import DataTable from "react-data-table-component";
import InputSearch from "../../public/atoms/InputSearch";
import ModalCrud from "./ModalCrud";
import apiRoutes from "../../../config/apiRoutes";
import useCrud from "../../../hooks/useCrud";
import columnsConfig from "../../../config/columnsConfig";
import Form from "../../public/molecules/Form";
import InputForm from "../../public/atoms/InputForm";
import Button from "../../public/atoms/Button";
import ModalAlert from '../../admin/molecules/ModalAlert';
import IconSvg from "../../public/atoms/IconSvg";
import LinkNavigate from "../../public/atoms/LinkNavigate";
import { useNavigate } from "react-router-dom";

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

  .Buttom {
    display: flex;
    width: 100%;
    gap: 30px;
    justify-content: center;
  }

  .input {
    margin-bottom: 40px;
    padding-top: 0;
    width: 70%;
  }

  .IconSvg {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .svgEdit {
    cursor: pointer;
  }

  .svgDelete {
    cursor: pointer;
  }

  .svg {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .Buttom {
      gap: 50px;
    }
  }
`;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Crud = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const endpoint = apiRoutes[path] || "";
  const { data, remove, fetchData } = useCrud(endpoint);
  const columns = columnsConfig[path] || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [alertOpen, setAlertOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Actualiza los datos filtrados cada vez que cambien los datos originales
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchText(searchTerm);

    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setAlertOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete) {
      await remove(itemToDelete);
      fetchData();
      setItemToDelete(null);
    }
    setAlertOpen(false);
  };

  const handleCancelDelete = () => {
    setItemToDelete(null);
    setAlertOpen(false);
  };

  const navigate = useNavigate();

  return (
    <List>
      <div className="Buttom">
        <IconSvg name='Back' size='40' className='svg' onClick={() => navigate(-1)}/>
        <LinkNavigate to='/product'><ButtonCrud label="Agregar" /></LinkNavigate>
        <InputSearch
          type="text"
          className="input"
          value={searchText}
          onChange={handleChange}
          placeholder="Buscar..."
        />
      </div>
      <DataTable
        columns={[
          ...columns,
          {
            name: "Acciones",
            cell: (row) => (
              <div className="IconSvg">
                <IconSvg name='Edit' className='svgEdit' onClick={() => handleEdit(row)} size='25'/>
                <IconSvg name='Delette' className='svgDelete' onClick={() => handleDeleteClick(row.id)} size='30'/>
              </div>
            ),
          },
        ]}
        noDataComponent={<p>No hay datos disponibles</p>}
        data={filteredData}
        selectableRows
        pagination
        fixedHeader
        persistTableHead={true}
      />
      <ModalCrud
        isOpen={modalOpen}
        onClose={handleClose}
        title={selectedItem ? "Editar" : "Agregar"}
      >
        <FormStyle>
          <InputForm placeholder="Nombre" />
          <InputForm placeholder="Descripción" />
          <Button>{selectedItem ? "Actualizar" : "Agregar"}</Button>
        </FormStyle>
      </ModalCrud>
      
      {/* Modal de confirmación para eliminar */}
      {alertOpen && (
        <ModalAlert 
          message="¿Estás seguro de que quieres eliminar este dato?" 
          onClose={handleCancelDelete} 
          onConfirm={handleConfirmDelete} 
        />
      )}
    </List>
  );
};

export default Crud;
