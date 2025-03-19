import { useState } from "react";
import styled from "styled-components";
import ButtonCrud from "../../admin/atoms/ButtonCrud";
import DataTable from "react-data-table-component";
import InputSearch from "../../public/atoms/InputSearch";
import IconSvg from "../../public/atoms/IconSvg";

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
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 40px;
  }

  .input {
    padding-top: 0;
    padding-bottom: 50px;
  }

  .ipNKSC {
    background-color: #c1c1c1;
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
  },
  {
    name: 'Acciones',
    cell: () => (
      <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
        <IconSvg name="EditIcon" size={35} onClick={() => handleClick('Editar')} />
        <IconSvg name="EditIcon" size={35} onClick={() => handleClick('Actualizar')} />
        <IconSvg name="DeleteIcon" size={35} onClick={() => handleClick('Eliminar')} />
      </div>
    ),
  },
];

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
];

const ListCrud = () => {

  const [records, setRecords] = useState(data);

  const handleChange = (e) => {
    const filteredRecords = data.filter(record => {
      return record.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setRecords(filteredRecords);
  };

  return (
    <List>
      <div className="Buttom">
        <ButtonCrud label="Agregar" onClick={handleClick} />
        <InputSearch
          type="text"
          onChange={handleChange}
          className="input"
        />
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        onSelectedRowsChange={data => console.log(data)}
        pagination
        paginationTotalRows={5}
        fixedHeader
      />
    </List>
  );
};

export default ListCrud;
