import React from 'react'

export const TableReport = () => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre Empleado</th>
                        <th>Salario Neto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>674384</td>
                        <td>Pedro Perez</td>
                        <td>1800000</td>
                    </tr>
                    <tr>
                        <td>674123384</td>
                        <td>Gabriel Gaviria</td>
                        <td>2500000</td>
                    </tr>
                    <tr>
                        <td>2113545613</td>
                        <td>Andrea Andrade</td>
                        <td>900000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
