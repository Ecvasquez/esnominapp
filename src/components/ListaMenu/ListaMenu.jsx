import React from 'react'
import { Link} from "react-router-dom";

export const ListaMenu = () => {
    return (
        <>
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <img src="dist/img/exito-nuevo-logo.png" alt="Exito" className="img-fluid rounded float-left elevation-4" 
                        style={{'padding-left': '20px',height: '70px',width: '210px'}} />
            </div>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                <a href="#" className="d-block">PLATAFORMA DE GESTION</a>
                </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                <li className="nav-item ">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fas fa-cog" />
                        <p>
                        Administrar
                        <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to="nomina" className="nav-link">
                            <i className="far fa-money-bill-alt nav-icon " />
                                <p>Generar Nómina</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="respuestasolicitud" className="nav-link">
                                <i className="fas fa-gavel nav-icon" />
                                <p>Aprobar Solicitudes</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="salarios" className="nav-link">
                                <i className="fas fa-chart-line nav-icon" />
                                <p>Reporte Salarios</p>
                            </Link>
                        </li>
                    </ul>
                </li>

                
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-users" />
                        <p>
                        Usuario
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to="mainusuario" className="nav-link">
                                <i className="fas fa-user-plus nav-icon" />
                                <p>Gestionar Usuarios</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="solicitud" className="nav-link">
                                <i className="fas fa-bullhorn nav-icon" />
                                <p>Realizar Solicitudes</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-print" />
                        <p>
                        Certificados
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to="certificado" className="nav-link">
                                <i className="fas fa-address-card nav-icon" />
                                <p>Certificado Laboral</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="recibopago" className="nav-link">
                                <i className="fas fa-ticket-alt nav-icon" />
                                <p>Recibo de Pago</p>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="fas fa-user-secret nav-icon" />
                        <p>
                        Seguridad
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to="politicas" className="nav-link">
                                <i className="fas fa-sticky-note nav-icon" />
                                <p>Politicas</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="cambioclave" className="nav-link">
                                <i className="fas fa-key nav-icon" />
                                <p>Cambio de Contraseña</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                
            </ul>
            </nav>
            {/* /.sidebar-menu */}

        </div>

            
            

        </>
    )
}
