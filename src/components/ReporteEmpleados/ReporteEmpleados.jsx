import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import TableReport from '../TableReport'

export const ReporteEmpleados = () => {
    const [desde, setDesde] = useState('');
    const [hasta, setHasta] = useState('');
    const cambiodesde = (e) => setDesde(e.target.value);
    const cambiohasta = (e) => setHasta(e.target.value);

    return (
        <div className="container-fluid box box-info">
            <h3 className="box-title">Generar Reporte</h3>
            <Card>
                    <Card.Header>
                            <Card.Title>Seleccione Rango Salarial:</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <label  htmlFor="desde">Salarios Desde: </label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="desde"
                                            name="desde"  
                                            value={ desde }
                                            onChange={cambiodesde}/>
                                </Col>
                                <Col>
                                    <label  htmlFor="desde">Salarios Hasta: </label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="hasta"
                                            name="hasta"  
                                            value={ hasta }
                                            onChange={cambiohasta}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TableReport />
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <Button variant="primary">Generar</Button>
                                    <Button variant="primary">Enviar</Button>
                                    <Button variant="primary">Descargar</Button>
                                    <Button variant="primary">Imprimir</Button>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
            </Card>
            
        </div>
    )
}
