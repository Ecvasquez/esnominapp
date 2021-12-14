import React,{useState} from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap';
import Titulo from '../Titulo'

export const FormApplication = () => {
    const [solicitud, setSolicitud] = useState('')
    const [txtfechainicio, setTxtfechainicio] = useState('')
    const [txtfechafinal, setTxtfechafinal] = useState('')
    const [txtjustificacion, setTxtjustificacion] = useState('')

    const cambiosolicitud = (e)=>setSolicitud(e.target.value)
    const cambiofechainicio = (e)=>setTxtfechainicio(e.target.value)
    const cambiofechafinal = (e)=>setTxtfechafinal(e.target.value)
    const cambiojustificacion = (e)=>setTxtjustificacion(e.target.value)

    const validardatos = (e)=>{
        if (txtfechainicio.length === 0)
            alert('ERROR: introduzca nombre')
        else if (txtfechafinal.length === 0)
            alert('ERROR: introduzca descripcion')
        else if (txtjustificacion.length === 0)
            alert('ERROR: introduzca descripcion')
        else 
            alert('Datos correctos')
    }
   

    return (
        <div className="container-fluid">
            <Titulo titulo={"Solicitudes"}/>
            <form onSubmit={validardatos}>
                <Row>
                    <Col>
                        <label for="solicitud">Tipo Solicitud</label>
                        <div className="mb-3 col">
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="solicitud" 
                                    name="solicitud" 
                                    onChange={cambiosolicitud} >
                                <option selected>Seleccione una opcion</option>
                                <option value={1}>Vacaciones</option>
                                <option value={2}>Permisos</option>
                            </select>
                        </div>
                    </Col>
                    <Col>
                        

                    </Col>
                </Row>
                <Row>
                <Card>
                        <Card.Header>
                            <Card.Title>Información</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                            <label htmlFor="fechainicio">Fecha Inicio</label>
                                            
                                                <input type="date" 
                                                    className="form-control-plaintext" 
                                                    id="fechainicio" 
                                                    name="fechainicio" 
                                                    value={txtfechainicio}
                                                    onChange={cambiofechainicio}
                                                    />
                                            
                                    </Col>
                                    <Col>
                                            <label htmlFor="fechafin">Fecha Final</label>
                                                <input type="date" 
                                                    className="form-control-plaintext" 
                                                    id="fechafinal"
                                                    name="fechafinal" 
                                                    value={txtfechafinal}
                                                    onChange={cambiofechafinal}/>
                                            
                                    </Col>
                                    <Col>
                                        <div class="mb-3 col">
                                            <Button variant="primary">Enviar</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <div className="form-group">
                                        <label for="justificacion" class="form-label">Justificacion</label>
                                        <textarea 
                                            class="form-control" 
                                            id="justificacion"
                                            name="justificacion" 
                                            rows="10"
                                            cols="150" 
                                            onChange={cambiojustificacion}>
                                                {txtjustificacion}
                                        </textarea>
                                    </div>
                                </Col>
                                
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </form>
        </div>
    )
}
