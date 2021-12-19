import React,{useEffect, useState} from 'react'
import { Link} from "react-router-dom";
import { TableUsers } from '../TableUsers/TableUsers'
import Titulo from '../Titulo/Titulo'

export const MainAdmin = () => {
        const [employees,setEmployees] = useState([]);
        useEffect(() => {
            fetch('http://localhost:9000/api/employees')
            .then(response => response.json())
            .then(data => setEmployees(data));
            },[]);
    return (    
        <div>
            <Titulo titulo={'Lista de Usuarios'}/>
            <TableUsers employees={employees}/>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="../users">
                    <button type="button" className="btn btn-info btn-lg" >Crear Usuario</button>
                </Link>
            </div>
        </div>
    )
}
