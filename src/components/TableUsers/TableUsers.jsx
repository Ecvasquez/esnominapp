import React from 'react'

export const TableUsers = () => {
    return (
    <div className="container-fluid box box-info">
            <h3 className="box-title">Usuarios</h3>
        <div className="box-body">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cargo</th>
                            <th>Dependencia</th>
                            <th>Inicio Contrato</th>
                            <th>Fin Contrato</th>
                            <th colspan="3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pedro Perez</td>
                            <td>Auxiliar</td>
                            <td>Limpieza</td>
                            <td>21/01/2021</td>
                            <td>21/12/2021</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                        <tr>
                            <td>Gabriel Gaviria</td>
                            <td>Auxiliar</td>
                            <td>Limpieza</td>
                            <td>21/01/2021</td>
                            <td>21/12/2021</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                        <tr>
                            <td>Andrea Andrade</td>
                            <td>Auxiliar</td>
                            <td>Limpieza</td>
                            <td>21/01/2021</td>
                            <td>21/12/2021</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>{/* /.table-responsive */}
        </div>{/* /.box-body */}
    </div>

    )
}
