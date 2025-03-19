import Table from "../../components/admin/atoms/Table";
import IconSvg from "../../components/public/atoms/IconSvg";

const columns = [
  { name: "Número de Mesa", selector: (row) => row.numero_mesa, sortable: true },
  { name: "Capacidad", selector: (row) => row.capacidad, sortable: true },
  { name: "Ubicación", selector: (row) => row.ubicacion, sortable: true },
  { name: "Estado", selector: (row) => row.estado, sortable: true },
  {
    name: "Acciones",
    selector: "acciones",
    cell: (row) => (
      <div style={{ display: 'flex', gap: '10px' }}>
        <IconSvg name="EditIcon" size={30} onClick={() => handleConsult(row)} />
        <IconSvg name="EditIcon" size={30} onClick={() => handleUpdate(row)} />
        <IconSvg name="DeleteIcon" size={30} onClick={() => handleDelete(row)} />
      </div>
    ),
  },
];

const handleUpdate = (row) => {
  console.log("Actualizar registro:", row);
};

const handleDelete = (row) => {
  console.log("Eliminar registro:", row);
};

const handleConsult = (row) => {
  console.log("Consultar registro:", row);
};


const MesasAdmin = () => {
  return (
    <div>
      <Table columns={columns} 
      apiUrl="http://127.0.0.1:8000/api/mesas" 
      title="AdministraciÃ³n de Mesas" 
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onConsult={handleConsult}
      />
    </div>
  );
};

export default MesasAdmin;