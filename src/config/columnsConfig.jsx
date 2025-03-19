const columnsConfig = {
    mesas: [
      { name: "Número de Mesa", selector: (row) => row.numero_mesa, sortable: true },
      { name: "Capacidad", selector: (row) => row.capacidad, sortable: true },
      { name: "Ubicación", selector: (row) => row.ubicacion, sortable: true },
      { name: "Estado", selector: (row) => row.estado, sortable: true },
    ],
    usuarios: [
      { name: "Nombre", selector: (row) => row.nombre, sortable: true },
      { name: "Correo", selector: (row) => row.email, sortable: true },
      { name: "Rol", selector: (row) => row.rol, sortable: true },
    ],
    productos: [
      { name: "Nombre del Producto", selector: (row) => row.nombre, sortable: true },
      { name: "Precio", selector: (row) => row.precio, sortable: true },
      { name: "Stock", selector: (row) => row.stock, sortable: true },
    ],
    clientes: [
      { name: "Nombre", selector: (row) => row.nombre, sortable: true },
      { name: "Apellido", selector: (row) => row.apellido, sortable: true },
      { name: "Teléfono", selector: (row) => row.telefono, sortable: true },
    ],
  };
  
  export default columnsConfig;
  