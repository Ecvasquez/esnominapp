import React, { useState } from 'react';

export const FormMainEmp = () => {
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

    const validardatos = () => {
        if (cedula === '' || nombre === '' || apellido === '' || genero === '' || fechanac === '' || ciudadnac === '' || telefono === '' || direccion === '' || ciudad === '' || email === '') {
            alert('Debe llenar todos los campos');
        } else {
            alert('Datos guardados');
        }
    }


    return (
        <div className="container-fluid">
            <form className="form-group" onSubmit = {validardatos}>
                <div>
                    <label  htmlFor="cedula">Cédula</label>
                    <input  type="text" 
                            className="form-control" 
                            id="cedula"
                            value={ cedula }/>
                </div>
                <div className="form-group">
                    <label  htmlFor="nombre">Nombre</label>
                    <input  type="text" 
                            className="form-control" 
                            id="nombre"  
                            value={ nombre }/>
                </div>
                <div className="form-group">
                    <label  htmlFor="apellido">Apellido</label>
                    <input  type="text" 
                            className="form-control" 
                            id="apellido" 
                            value={ apellido }/>
                </div>
                <div className="form-group">
                    <label  htmlFor="genero">Género</label>
                    <input  type="text" 
                            className="form-control" 
                            id="genero" 
                            value={ genero }/>
                </div>
                <div className="form-group">
                    <label  htmlFor="fechanac">Fecha de Nacimiento</label>
                    <input  type="text" 
                            className="form-control" 
                            id="fechanac" 
                            value={ fechanac }/>
                </div>
                <div className="form-group">
                    <label  htmlFor="ciudadnac">Ciudad de Nacimiento</label>
                    <input  type="text" 
                            className="form-control" 
                            id="ciudadnac" 
                            value={ ciudadnac } />
                </div>
                <div className="form-group">
                    <label  htmlFor="telefono">Telefono</label>
                    <input  type="text" 
                            className="form-control" 
                            id="telefono" 
                            value={ telefono } />
                </div>
                <div className="form-group">
                    <label  htmlFor="direccion">Dirección</label>
                    <input  type="text" 
                            className="form-control" 
                            id="direccion" 
                            value={ direccion } />
                </div>
                <div className="form-group">
                    <label  htmlFor="ciudad">Ciudad</label>
                    <input  type="text" 
                            className="form-control" 
                            id="ciudad"
                            value={ ciudad } />
                </div>
                <div className="form-group">
                    <label  htmlFor="email">E-mail</label>
                    <input  type="text" 
                            className="form-control" 
                            id="email" 
                            value={ email } />
                </div>
                <div>
                    <div className="form-group">Mensaje ok o de Error aqui...</div>
                    <div className="form-group">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
