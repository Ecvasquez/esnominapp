import React from 'react'
import FormOlvidoMail from '../components/FormOlvidoMail/FormOlvidoMail'
import { HeaderBar2 } from '../components/HeaderBar/HeaderBar2'


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