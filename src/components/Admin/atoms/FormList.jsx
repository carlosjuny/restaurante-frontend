import { useState } from "react";
import styled from "styled-components";
import CRUD from "./CRUD";
import DataTable from "react-data-table-component";
import Input from "../../web/atoms/Input";


const List = styled.div`
  display: flex;
  padding: 50px;
  width: 100%;
  height: 85vh;
  background-color: #ffffffcf;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin: auto;

  .Buttom {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 40px;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    .Buttom {
      width: 100%;
      display: flex;
      grid-template-columns: 1fr 2fr;
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    /* width: 100%; */
  }
`;

const handleClick = () => {
    alert("Acción del botón ejecutada");
  };


const columns = [
  {
    name: 'Nombre',
    selector: row => row.name,
    sortable: true
  },
  {
    name: 'Apellido',
    selector: row => row.lastname,
    sortable: true
  },
  {
    name: 'Correo',
    selector: row => row.email,
    sortable: true
  },
  {
    name: 'Teléfono',
    selector: row => row.phone,
    sortable: true
  }
]

const data = [
  {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@correo.com',
    phone: '1234567890'
  },
  {
    name: 'Pedro',
    lastname: 'González',
    email: 'pedro.gonzalez@correo.com',
    phone: '9876543210'
  },
  {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@correo.com',
    phone: '1234567890'
  },
  {
    name: 'Pedro',
    lastname: 'González',
    email: 'pedro.gonzalez@correo.com',
    phone: '9876543210'
  },
  {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@correo.com',
    phone: '1234567890'
  },
  {
    name: 'Pedro',
    lastname: 'González',
    email: 'pedro.gonzalez@correo.com',
    phone: '9876543210'
  },
  {
    name: 'Juan',
    lastname: 'Pérez',
    email: 'juan.perez@correo.com',
    phone: '1234567890'
  },
  {
    name: 'Pedro',
    lastname: 'González',
    email: 'pedro.gonzalez@correo.com',
    phone: '9876543210'
  },
]

const FormList = () => {

  const [records, setRecords] = useState(data)
  
  const handleChange = (e) => {
    const filteredRecords = data.filter(record => {
    return record.name.toLowerCase().includes(e.target.value.toLowerCase())
  })

  setRecords(filteredRecords)
  
  }

  return (
    <List >

      <div className="Buttom">
        <CRUD label="Consultar" onClick={handleClick} />
        <CRUD label="Crear" onClick={handleClick} />
        <CRUD label="Actualizar" onClick={handleClick} />
        <CRUD label="Eliminar" onClick={handleClick} />
      <Input type='text'
        onChange={handleChange}
      />
      </div>
      {/* <div>
      <Table>
      <h1>Tabla de Usuarios</h1>
      </Table>
    </div> */}
    <DataTable
      columns={columns}
      data={records}
      selectableRows
      onSelectedRowsChange={data => console.log(data)}
      pagination
      // paginationPerPage={5}
      paginationTotalRows={5}
      fixedHeader
      >

    </DataTable>

    </List>
  );
};

export default FormList;
