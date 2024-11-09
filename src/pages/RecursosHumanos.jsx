import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const RecursosHumanos = () => {

    const urlBase = "http://localhost:8080/restaurant.rh-app/employees";

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get(urlBase);
        console.log("Resultado cargar empleados");
        console.log(result.data);
        setEmployees(result.data);
    }

  return (
    <div className='container text-center' style={{margin: "30px"}}>
        <h3>Sistema de recursos humanos</h3>
        <table className='table table-striped table-hover align-middle'>
            <thead className='table-dark'>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Empleado</th>
                    <th scope='col'>Departamento</th>
                    <th scope='col'>Sueldo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>
    </div>

  )
}

export default RecursosHumanos