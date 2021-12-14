import React, { Component, useState } from "react";
import { Container, Card, Col, Row, Button, Form } from 'react-bootstrap'

export const FormLogin2 = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');
  
    const cambiouser = (e) => {
      setUser(e.target.value);
      console.log(e.target.value);
    }
    const cambiopassword = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    }
    const validaddatos = (e) => {
      alert('Bienvenido al sistema de gestion EXITO');
    }
    return (
        <form className="mb-3" onSubmit={this.validaddatos} >
            <h3>Cambio de Contraseña</h3>

            <div className="form-group">
                <label>New Password</label>
                <input type="password" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Cambiar</button>

        </form>
    )
}
