import React, { useState } from 'react'

import { Card, Col, Row, Button } from 'react-bootstrap'
import Titulo from '../Titulo'

export const FormUser = () => {
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');
    const [fechanac, setFechanac] = useState('');
    const [ciudadnac, setCiudadnac] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [email, setEmail] = useState('');

    const [banco, setBanco] = useState('');
    const [tipocuenta, setTipocuenta] = useState('');
    const [numcuenta, setNumcuenta] = useState('');

    const cambiocedula = (e) => setCedula(e.target.value);
    const cambionombre = (e) => setNombre(e.target.value);
    const cambioapellido = (e) => setApellido(e.target.value);
    const cambiogenero = (e) => setGenero(e.target.value);
    const cambiofechanac = (e) => setFechanac(e.target.value);
    const cambiociudadnac = (e) => setCiudadnac(e.target.value);
    const cambiotelefono = (e) => setTelefono(e.target.value);
    const cambiodireccion = (e) => setDireccion(e.target.value);
    const cambiociudad = (e) => setCiudad(e.target.value);
    const cambioemail = (e) => setEmail(e.target.value);

    const cambiobanco = (e) => setBanco(e.target.value);
    const cambiotipocuenta = (e) => setTipocuenta(e.target.value);
    const cambionumcuenta = (e) => setNumcuenta(e.target.value);

    const crear_empleado = () => {
        const empleado = {
            document: cedula,
            name: nombre,
            lastname: apellido,
            gender: genero,
            birthDate: fechanac,
            birthCity:ciudadnac,
            telephone:telefono,
            adress:direccion,
            city:ciudad,
            email:email,
            bank:banco,
            accountType:tipocuenta,
            accountNumber:numcuenta
        }
        return empleado;
    }

   
    const validardatos = (e) => {
        e.preventDefault();
        if (cedula === '' || nombre === '' || apellido === '' || genero === '' || fechanac === '' || ciudadnac === '' 
        || telefono === '' || direccion === '' || ciudad === '' || email === '') {
            alert('Debe llenar todos los campos');
        } else {
            const empleado = {
                document: cedula,
                name: nombre,
                lastname: apellido,
                gender: genero,
                birthDate: fechanac,
                birthCity:ciudadnac,
                telephone:telefono,
                adress:direccion,
                city:ciudad,
                email:email,
                bank:banco,
                accountType:tipocuenta,
                accountNumber:numcuenta
            }
            alert(JSON.stringify(empleado))
            /*fetch('http://localhost:9000/api/employees', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(empleado), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));*/
            //alert('Datos guardados');
            //window.location.href = "../app"
        }
    }


    return (
        <div className="container-fluid">
            <Titulo titulo={"Gestion de Usuarios"}/>
            <form className="form-group" onSubmit = {validardatos}>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Informacion Empleado</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <div className="form-group">
                                    <label  htmlFor="cedula">Cédula</label><br />
                                    <input  type="text" 
                                            className="form-control" 
                                            id="cedula"
                                            name="cedula"
                                            value={ cedula }
                                            onChange={cambiocedula}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="nombre">Nombre</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="nombre"
                                            name="nombre"  
                                            value={ nombre }
                                            onChange={cambionombre}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="apellido">Apellido</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="apellido"
                                            name="apellido" 
                                            value={ apellido }
                                            onChange={cambioapellido}/>
                                </div>
                                <div className="form-group">
                                <label  htmlFor="genero">Genero</label><br />
                                    <select className="form-select" 
                                                aria-label="Default select example" 
                                                id="genero" 
                                                name="genero" 
                                                onChange={cambiogenero} >
                                                <option selected>Seleccione Genero</option>
                                                <option value={' Masculino'}>Masculino</option>
                                                <option value={'Femenino'}>Femenino</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="fechanac">Fecha de Nacimiento</label>
                                    <input  type="date" 
                                            className="form-control" 
                                            id="fechanac"
                                            name="ciudadnac" 
                                            value={ fechanac }
                                            onChange={cambiofechanac}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="ciudadnac">Ciudad de Nacimiento</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="ciudadnac"
                                            name="ciudadnac" 
                                            value={ ciudadnac } 
                                            onChange={cambiociudadnac}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="telefono">Telefono</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="telefono"
                                            name="telefono" 
                                            value={ telefono } 
                                            onChange={cambiotelefono}/>
                                </div>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title></Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <div className="form-group">
                                    <label  htmlFor="direccion">Dirección</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="direccion"
                                            name="direccion" 
                                            value={ direccion } 
                                            onChange={cambiodireccion}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="ciudad">Ciudad</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="ciudad"
                                            name="ciudad"
                                            value={ ciudad } 
                                            onChange={cambiociudad}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="email">E-mail</label><br />
                                    <input  type="text" 
                                            className="form-control" 
                                            id="email"
                                            name="email" 
                                            value={ email } 
                                            onChange={cambioemail}/>
                                </div>
                                <div className="form-group">
                                <label  htmlFor="banco">Banco</label><br />
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
                                </div>
                                <div className="form-group">
                                <label  htmlFor="tipocuenta">Tipo de Cuenta</label><br />
                                    <select className="form-select" 
                                                aria-label="Default select example" 
                                                id="tipocuenta" 
                                                name="tipocuenta" 
                                                onChange={cambiotipocuenta} >
                                                <option selected>Seleccione tipo de cuenta</option>
                                                <option value={' Corriente'}>Corriente</option>
                                                <option value={'Ahorros'}>Ahorros</option>
                                                <option value={'Nomina'}>Nómina</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="numcuenta">Número de Cuenta</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="numcuenta"
                                            name="numcuenta"  
                                            value={ numcuenta } 
                                            onChange={cambionumcuenta}/>
                                </div>
                             
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="form-group">Mensaje de Error aqui...</div>
                </Col>
                <Col>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary " >Enviar</button>
                    </div>
                </Col>

            </Row> 
            </form>
        </div>
    )
}
