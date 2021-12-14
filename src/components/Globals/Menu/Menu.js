import React, { Component } from 'react';
import ElementoLista from '../../ElementoLista';
import List from '../../List';
import { Logo } from '../../Logo/Logo';
import ListaMenuAdmin from '../ListaMenuAdmin';

export const Menu = () => {
    return (
        <div>
            <aside className="main-sidebar">
                <Logo />
                <ListaMenuAdmin />       
            </aside>    
        </div>
    );
}
