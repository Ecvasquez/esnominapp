import React from 'react'
import { TableUsers } from '../TableUsers/TableUsers'
import Titulo from '../Titulo/Titulo'

export const MainAdmin = () => {
    return (
        <div>
            <Titulo titulo={'Lista de Usuarios'}/>
            <TableUsers />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-info btn-lg" >Crear Usuario</button>
            </div>
        </div>
    )
}
