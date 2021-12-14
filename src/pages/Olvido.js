import React from 'react'
import { Header } from '../components/Header/Header'
import { Dashboard } from '../components/Dashboard/Dashboard'
//import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'
import FormLogin from '../components/FormLogin/FormLogin'
import FormOlvidoMail from '../components/FormOlvidoMail/FormOlvidoMail'
//import Footer2 from '../components/Footer/Footer2'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'
import { Form } from 'react-bootstrap'


export const Olvido = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark">
             < HeaderBar2 />
            </nav>
            < FormOlvidoMail />

        </div>
    )
}