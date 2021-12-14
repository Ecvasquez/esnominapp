import React, { useState } from 'react';

export const TableAprobarSolicitudes = () => {
    
    return (
    <div className="container-fluid box box-info">
            <h3 className="box-title">Aprobación de Permisos y Solicitudes</h3>
            
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
                            <td><button type="button" class="btn btn-success">Rechazar</button></td>
                            <td><button type="button" class="btn btn-danger">Aprobar</button></td>
                            <td><button type="button" class="btn btn-primary">Pendiente</button></td>
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
                            <td><button type="button" class="btn btn-success">Rechazar</button></td>
                            <td><button type="button" class="btn btn-danger">Aprobar</button></td>
                            <td><button type="button" class="btn btn-primary">Pendiente</button></td>
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
                            <td><button type="button" class="btn btn-success">Aprobar</button></td>
                            <td><button type="button" class="btn btn-danger">Rechazar</button></td>
                            <td><button type="button" class="btn btn-primary">Pendiente</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
};
