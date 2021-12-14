import React,{useState} from 'react'

import { Card, Col, Row, Button } from 'react-bootstrap'
import { Payment } from '../Payment/Payment'
import Titulo from '../Titulo'

export const FormPayment = () => {
    const [txtcedula, setTxtcedula] = useState('')
    const [txtnombre, setTxtnombre] = useState('')
    const [txtapellido, setTxtapellido] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const cambiocedula = (e)=>setTxtcedula(e.target.value)
    const cambionombre = (e)=>setTxtnombre(e.target.value)
    const cambioapellido = (e)=>setTxtapellido(e.target.value)
    const cambioyear = (e)=>setYear(e.target.value)
    const cambiomonth = (e)=>setMonth(e.target.value)

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
        <div className="container-fluid">
            <Titulo titulo={"Recibos de Pago"}/>
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
                    <div className="mb-3 col">
                            <label for="year">Año</label><br />
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="year" 
                                    name="year" 
                                    onChange={cambioyear} >
                                <option selected>Seleccione año</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                            </select>
                        </div>
                        <div className="mb-3 col">
                            <label for="month">Mes</label><br />
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="month" 
                                    name="month" 
                                    onChange={cambiomonth} >
                                <option selected>Seleccione mes</option>
                                <option value={'Enero'}>Enero</option>
                                <option value={'Febrero'}>Febrero</option>
                                <option value={'Marzo'}>Marzo</option>
                                <option value={'Abril'}>Abril</option>
                                <option value={'Mayo'}>Mayo</option>
                                <option value={'Junio'}>Junio</option>
                                <option value={'Julio'}>Julio</option>
                                <option value={'Agosto'}>Agosto</option>
                                <option value={'Septiembre'}>Septiembre</option>
                                <option value={'Octubre'}>Octubre</option>
                                <option value={'Noviembre'}>Noviembre</option>
                                <option value={'Diciembre'}>Diciembre</option>
                            </select>
                        </div>
                    </Col>
                    <Col>
                        <Button variant="primary">Buscar</Button>   
                        <Button variant="success">Generar</Button>
                    </Col>
                </Row>                    
                <Row>
                    <Col></Col>
                </Row>
                <Row><Payment />
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button variant="primary">Descargar</Button>
                        <Button variant="primary">Imprimir</Button>
                    </Col>
                    
                </Row>
                
            </form>
        </div>
    )
}
