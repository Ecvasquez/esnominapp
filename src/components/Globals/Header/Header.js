import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from '../HeaderBar';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                
                <HeaderBar />
                

            </header> 
        );
    }
}

export default Header;