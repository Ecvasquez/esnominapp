import React, { Component, useState } from "react";
import { Container, Card, Col, Row, Button, Form } from 'react-bootstrap'

export const FormCambioClave = () => {

  const validaddatos = (e) => {
    console.log(e)
    alert('El cambio fue exitoso');


  }

    return (
        <form className="mb-3" onSubmit={validaddatos}>
            <h3>Cambio de Contraseña</h3>

            <div className="form-group">
                <label>New Password</label>
                <input id= "p1" type="password" className="form-control"  />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input id="p2" type="password" className="form-control"  />
            </div>

            <button variant="primary" size="lg" type="submit" className="btn btn-primary btn-block">Cambiar</button>

        </form>
    )
}
