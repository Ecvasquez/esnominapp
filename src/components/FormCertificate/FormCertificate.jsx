import React,{useState} from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { Certificado } from '../Certificado/Certificado'
import Titulo from '../Titulo'

export const FormCertificate = () => {
    const [txtcedula, setTxtcedula] = useState('')
    const [txtnombre, setTxtnombre] = useState('')
    const [txtapellido, setTxtapellido] = useState('')

    const cambiocedula = (e)=>setTxtcedula(e.target.value)
    const cambionombre = (e)=>setTxtnombre(e.target.value)
    const cambioapellido = (e)=>setTxtapellido(e.target.value)

    const validardatos = (e)=>{
        if (txtcedula.length === 0)
            alert('ERROR: introduzca cedula')
        else if (txtnombre.length === 0)
            alert('ERROR: introduzca nombre')
        else if (txtapellido.length === 0)
            alert('ERROR: introduzca apellido')
        else 
            alert('Datos correctos')
    }
   

    return (
        <>
            <Titulo titulo={"Certificaciones"}/>
            <form className="form-group" onSubmit={validardatos}>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title>Informacion Empleado</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                        <div>
                                        <label htmlFor="cedula" >Cédula</label><br />
                                                <input type="text" 
                                                        className="form-control-plaintext" 
                                                        id="cedula" 
                                                        name="cedula" 
                                                        value={txtcedula}
                                                        onChange={cambiocedula}
                                                        />
                                    </div><br />
                                    <div>
                                        <label htmlFor="nombre" >Nombres</label>
                                                <input type="text" 
                                                        className="form-control-plaintext" 
                                                        id="nombre" 
                                                        name="nombre" 
                                                        value={txtnombre}
                                                        onChange={cambionombre}
                                                        />
                                    </div><br />
                                    <div>
                                        <label htmlFor="apedillo" >Apellidos</label>
                                                <input type="text" 
                                                        className="form-control-plaintext" 
                                                        id="apellido" 
                                                        name="apellido" 
                                                        value={txtapellido}
                                                        onChange={cambioapellido}
                                                        />
                                    </div><br />
                                    <Row>
                                        
                                    </Row>
                                    
                                </Card.Text>
                                        
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Button variant="primary">Buscar</Button>   
                        <Button variant="success">Generar</Button>
                    </Col>
                </Row>                    
                <Row>
                    <Col><Certificado /></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button variant="primary">Descargar</Button>
                        <Button variant="primary">Imprimir</Button>
                    </Col>
                </Row>
            </form>
        </>
    )
}
