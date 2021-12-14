import React, { Component } from 'react';

class HeaderBar extends Component {
    pushMenu = () =>{
        var body = document.body;
        if(body.clientWidth > 768){
            if(body.className.indexOf('sidebar-collapse') === -1){
                body.className += ' sidebar-collapse';
            }else {
                body.className = body.className.replace(' sidebar-collapse', '');
            }
        }else{
            if (body.className.indexOf('sidebar-open') === -1) {
                body.className += ' sidebar-open';
            }else{
                body.className = body.className.replace(' sidebar-open','');
            }
        }
    }
    render() {
        var that = this;
        return (
            <>
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>E</b>TO</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>EXITO</b></span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top" role="navigation">
                    {/* Sidebar toggle button*/}
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                    <span className="hidden-xs">Nombre usuario</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {/* User image */}
                                    <li className="user-header">
                                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                        <p>
                                            Nombre usuario - Rol
                                        </p>
                                    </li>
                                    {/* Menu Body */}
                                    <li className="user-body">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                    {/* Menu Footer */}
                                    <li className="user-footer">
                                        
                                    </li>
                                </ul>
                            </li>
                            { /* control Sidebar Toggle Button */}
                            <li>
                                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default HeaderBar;