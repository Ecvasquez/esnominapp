import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import TableReport from '../TableReport'

export const ReporteNomina = () => {
    const [banco, setBanco] = useState('');
    const cambiobanco = (e) => setBanco(e.target.value);

    return (
        <div className="container-fluid box box-info">
            <h3 className="box-title">Generar Nomina</h3>
                <Card>
                    <Card.Header>
                            <Card.Title>Seleccione:</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <Col><label  htmlFor="banco">Banco: </label></Col>
                                    <Col>
                                        <select className="form-select" 
                                            aria-label="Default select example" 
                                            id="banco" 
                                            name="banco" 
                                            onChange={cambiobanco} >
                                            <option selected>Seleccione Banco</option>
                                            <option value={' Bancolombia'}>Bancolombia</option>
                                            <option value={'Av villas'}>Av villas</option>
                                            <option value={'Banco de Occidente'}>Banco de Occidente</option>
                                        </select>
                                    </Col>
                                    
                                    
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
