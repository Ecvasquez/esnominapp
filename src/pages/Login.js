import React from 'react'
import FormLogin from '../components/FormLogin/FormLogin'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'

export const Login = () => {

    const clickBtn= () => {
        fetch('http://localhost:9000/api/get_employees')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark">
             <  HeaderBar2 />
            </nav>
            <FormLogin />
            <button onClick={clickBtn}>Prueba</button>

        </div>
    )
}