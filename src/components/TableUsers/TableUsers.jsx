import React,{useState} from 'react'
import { Link} from "react-router-dom";

export const TableUsers = (props) => {
    const {employees} = props
    const [contract,setContract] = useState([]);
    const datacontract = (id) => {
        fetch(`http://localhost:9000/api/employees/${id}`)
        .then(response => response.json())
        .then(data => setContract(data));
    }
    console.log(employees)
    const recibir_empleado = () => {

    }
    return (
    <div className="container-fluid box box-info">
            <h3 className="box-title">Usuarios</h3>
        <div className="box-body">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Dirección</th>
                            <th>Email</th>
                            <th colspan="3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => {
                                return(
                                    <tr>
                                        <td>{employee.document}</td>
                                        <td>{employee.name}</td>
                                        <td> {employee.lastname}</td>
                                        <td>{employee.telephone}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            
                                            <Link to={`../empleados?id=${employee._id}`}>
                                                <button type="button" className="btn btn-primary btn-lg" >ver</button>
                                            </Link>
                                        </td>
                                        <td><button type="button" class="btn btn-danger btn-lg">Eliminar</button></td>
                                        <td>
                                            <Link to={`../solicitud?id=${employee._id}`}>
                                                <button type="button" className="btn btn-info btn-lg" >Solicitudes</button>
                                            </Link>
                                        </td>
                                       
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>{/* /.table-responsive */}
        </div>{/* /.box-body */}
    </div>

    )
}
