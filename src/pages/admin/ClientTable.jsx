import { useState } from "react";
import useCrud from "../../hooks/useCrud";
import Crud from "../../components/admin/molecules/Crud";
import ModalCrud from "../../components/admin/molecules/ModalCrud";
import TemplateAdmin from "../../components/admin/templates/TemplateAdmin";

const ClientTable = () => {
  const { data, loading, error } = useCrud("/mesas");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const columns = [
    { name: "Número de Mesa", selector: (row) => row.numero_mesa, sortable: true },
    { name: "Capacidad", selector: (row) => row.capacidad, sortable: true },
    { name: "Ubicación", selector: (row) => row.ubicacion, sortable: true },
    { name: "Estado", selector: (row) => row.estado, sortable: true },
    {
      name: "Acciones",
      cell: (row) => (
        <>
          <button onClick={() => handleEdit(row)}>✏️ Editar</button>
          <button onClick={() => handleDelete(row.id)}>🗑️ Eliminar</button>
        </>
      ),
    },
  ];

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    console.log("Eliminar mesa con ID:", id);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <TemplateAdmin>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setModalOpen(true)}>➕ Agregar Mesa</button>
      </div>
      <Crud columns={columns} data={data} loading={loading} error={error} />
      {modalOpen && (
        <ModalCrud isOpen={modalOpen} onClose={handleClose} title={selectedItem ? "Editar Mesa" : "Agregar Mesa"}>
          <form>
            <label>Número de Mesa:</label>
            <input type="text" defaultValue={selectedItem?.numero_mesa || ""} />
            <label>Capacidad:</label>
            <input type="text" defaultValue={selectedItem?.capacidad || ""} />
            <label>Ubicación:</label>
            <input type="text" defaultValue={selectedItem?.ubicacion || ""} />
            <label>Estado:</label>
            <input type="text" defaultValue={selectedItem?.estado || ""} />
            <button type="submit">Guardar</button>
          </form>
        </ModalCrud>
      )}
    </TemplateAdmin>
  );
};

export default ClientTable;
