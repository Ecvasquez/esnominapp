import React, { useState } from "react";
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import './FormLogin.css'
import { Link } from 'react-router-dom'


export default function FormLogin() {

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
            <div>
                <div className="fadeInDown">
                    <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    
                    <div style={{backgroundColor: 'rgba(229,190,1,0.5)', color: '#e5be01'}}>
                        <div>
                            <img
                            className=""
                            src='dist/img/exito.png'
                            id="icon"
                            alt="User Icon"
                            width= '25%' 
                            height='25%'
                        />
                        </div>
                    </div>
                    {/* Login Form */}
                    <form  onSubmit={validaddatos}>
                        <input
                        type="text"
                        id="user"
                        className="fadeIn second"
                        name="user"
                        id="user"
                        placeholder="user"
                        value={user}
                        onChange={cambiouser}
                        required
                        />
                        <input
                        type="password"
                        id="password"
                        className="fadeIn third"
                        name="login"
                        placeholder="password"
                        value={password}
                        onChange={cambiopassword}
                        required
                        />
                        <input
                        type="submit"
                        value="Ingresar"
                        className="fadeIn fourth"
                        defaultValue="Log In"
                        />
                    </form>
                    {/* Remind Passowrd */}
                    <div id="formFooter2">
                        <a className="underlineHover" href="#">
                          <Link to ='/olvido'>
                            ¿Olvidaste tu contraseña?
                          </Link>

                        </a>
                    </div>
                    </div>
                </div>
            </div>

  );
}
