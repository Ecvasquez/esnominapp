import React, { useState } from 'react';

export const TableAprovarSolicitudes = () => {
    
    return (
    <div className="container-fluid box box-info">
            <h3 className="box-title">Aprovacion de permisos y Solicitudes</h3>
            <div className="box-tools pull-right">
                <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /></button>
                <button className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
            </div>
        <div className="box-body">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Tipo Solicitud</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha Final</th>
                            <th>Justificación</th>
                            <th>Estado</th>
                            <th colspan="3">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>72538968</td>
                            <td>Pedro</td>
                            <td>Perez</td>
                            <td>vacaciones</td>
                            <td>21/01/2021</td>
                            <td>12/01/2021</td>
                            <td>Vacaciones Programadas</td>
                            <td>Pendiente</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                        <tr>
                            <td>72332112</td>
                            <td>Gabriel</td>
                            <td>Gaviria</td>
                            <td>vacaciones</td>
                            <td>21/01/2021</td>
                            <td>12/01/2021</td>
                            <td>Vacaciones Programadas</td>
                            <td>Pendiente</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                        <tr>
                            <td>32697441</td>
                            <td>Andrea</td>
                            <td>Andrade</td>
                            <td>vacaciones</td>
                            <td>21/01/2021</td>
                            <td>12/01/2021</td>
                            <td>Vacaciones Programadas</td>
                            <td>Pendiente</td>
                            <td><button type="button" class="btn btn-success">Ver</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>
                            <td><button type="button" class="btn btn-primary">Solicitudes</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
};
