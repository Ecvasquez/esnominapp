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

    const [tipocontrato, setTipocontrato] = useState('');
    const [cargo, setCargo] = useState('');
    const [fechainicio, setFechainicio] = useState('');
    const [fechafinal, setFechafinal] = useState('');
    const [dependencia, setDependencia] = useState('');
    const [salario, setSalario] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');

    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');
    const [rol, setRol] = useState('');

    const employee=[]

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

    const cambiotipocontrato = (e) => setTipocontrato(e.target.value);
    const cambiocargo = (e) => setCargo(e.target.value);
    const cambiofechainicio = (e) => setFechainicio(e.target.value);
    const cambiofechafinal = (e) => setFechafinal(e.target.value);
    const cambiodependencia = (e) => setDependencia(e.target.value);
    const cambiosalario = (e) => setSalario(e.target.value);
    const cambiodisponibilidad = (e) => setDisponibilidad(e.target.value);
    const cambiousuario = (e) => setUsuario(e.target.value);
    const cambiopass = (e) => setPass(e.target.value);
    const cambiorol = (e) => setRol(e.target.value);

    const validardatos = (e) => {
        e.preventDefault();
        if (cedula === '' || nombre === '' || apellido === '' || genero === '' || fechanac === '' || ciudadnac === '' || telefono === '' || direccion === '' || ciudad === '' || email === '') {
            alert('Debe llenar todos los campos');
        } else {
            alert('Datos guardados');
            console.log(employee)
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
                                <div>
                        <label  htmlFor="cedula">Cédula</label>
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
                                                <option value={' M'}>Masculino</option>
                                                <option value={'F'}>Femenino</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="fechanac">Fecha de Nacimiento</label>
                                    <input  type="text" 
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
                                    <label  htmlFor="email">E-mail</label>
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
                                                <option value={' Bancolombia'}>Corriente</option>
                                                <option value={'Av villas'}>Ahorros</option>
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
                
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Informacion Contractual</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <div className="form-group">
                                <label  htmlFor="tipocontrato">Tipo de Contrato</label><br />
                        <select className="form-select" 
                                aria-label="Default select example" 
                                id="tipocontrato" 
                                name="tipocontrato" 
                                onChange={cambiotipocontrato} >
                                <option selected>Seleccione Tipo de Contrato</option>
                                <option value={'Prestacion de servicios'}>Prestacion de servicios</option>
                                <option value={'Por Horas'}>Por Horas</option>
                                <option value={'Tiempo Completo'}>Gerencia</option>
                        </select>
                                </div>
                                <div className="form-group">
                                <label  htmlFor="cargo">Cargo</label><br />
                                    <select className="form-select" 
                                            aria-label="Default select example" 
                                            id="cargo" 
                                            name="cargo" 
                                            onChange={cambiocargo} >
                                            <option selected>Seleccione Cargo</option>
                                            <option value={'Auxiliar'}>Auxiliar</option>
                                            <option value={'Administrativo'}>Administrativo</option>
                                            <option value={'Gerencia'}>Gerencia</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="apellido">Fecha Inicio</label>
                                    <input  type="date" 
                                            className="form-control" 
                                            id="fechainicio"
                                            name="fechainicio" 
                                            value={ fechainicio }
                                            onChange={cambiofechainicio}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="fechafinal">Fecha Finalización</label>
                                    <input  type="date" 
                                            className="form-control" 
                                            id="fechafinal"
                                            name="fechafinal" 
                                            value={ fechafinal }
                                            onChange={cambiofechafinal}/>
                                </div>
                                <div className="form-group">
                                <label  htmlFor="dependencia">Dependencia</label><br />
                                    <select className="form-select" 
                                            aria-label="Default select example" 
                                            id="dependencia" 
                                            name="dependencia" 
                                            onChange={cambiodependencia} >
                                            <option selected>Seleccione Dependencia</option>
                                            <option value={'Limpieza'}>Limpieza</option>
                                            <option value={'Comercial'}>Comercial</option>
                                            <option value={'Recursos Humanos'}>Recursos Humanos</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="salario">Salario</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="salario"
                                            name="salario" 
                                            value={ salario } 
                                            onChange={cambiosalario}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="disponibilidad">Disponibilidad</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            id="disponibilidad" 
                                            name="disponibilidad" 
                                            value={ disponibilidad } 
                                            onChange={cambiodisponibilidad}/>
                                </div>

                                <div className="form-group">
                    <label  htmlFor="usuario">Usuario</label>
                    <input  type="text" 
                            className="form-control" 
                            id="usuario"
                            name="usuario" 
                            value={ usuario } 
                            onChange={cambiousuario}/>
                                </div>
                                <div className="form-group">
                                    <label  htmlFor="pass">Contraseña</label>
                                    <input  type="password" 
                                            className="form-control" 
                                            id="pass"
                                            name="pass"
                                            value={ pass } 
                                            onChange={cambiopass}/>
                                </div>
                                <div className="form-group">
                                <label  htmlFor="rol">Rol Usuario</label><br />
                                    <select className="form-select" 
                                            aria-label="Default select example" 
                                            id="rol" 
                                            name="rol" 
                                            onChange={cambiorol} >
                                            <option selected>Seleccione Rol</option>
                                            <option value={'Administrador'}>Administrador</option>
                                            <option value={'Nomina'}>Nomina</option>
                                            <option value={'Empleado'}>Empleado</option>
                                    </select>
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
                        <Button variant="primary">Enviar</Button>
                    </div>
                </Col>

            </Row> 
                
                


            </form>
            
        </div>
    )
}
