import React from 'react'
import { Header} from '../components/Header/Header'
import { Dashboard } from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'

export const Applications = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Menu/>
            <Dashboard/>
            <Footer/>
        </div>
    )
}
