import React from 'react'
import './ListaMenuAdmin.css'

export const ListaMenuAdmin = () => {
    return (
        <ul class="sidebar-menu">
            <li class="header">PLATAFORMA DE GESTION</li>
            <li class="active treeview">
              <a href="#">
                <i class="fa fa-cog"></i> <span>Administrar</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li class="active"><a href="index.html"><i class="fa fa-money"></i> Generar Nómina</a></li>
                <li><a href="index2.html"><i class="fa fa-gavel"></i> Aprobar Solicitudes</a></li>
                <li><a href="index2.html"><i class="fa fa-line-chart"></i> Reporte Salarios</a></li>
              </ul>
            </li>
            <li class="active treeview">
              <a href="#">
                <i class="fa fa-users"></i> <span>Usuarios</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li class="active"><a href="index.html"><i class="fa fa-user-plus"></i> Gestionar Usuarios</a></li>
                <li><a href="index2.html"><i class="fa fa-bullhorn"></i> Realizar Solicitudes</a></li>
              </ul>
            </li>
            <li class="active treeview">
              <a href="#">
                <i class="fa fa-print"></i> <span>Certificados</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li class="active"><a href="index.html"><i class="fa fa-address-card"></i> Certificado Laboral</a></li>
                <li><a href="index2.html"><i class="fa fa-ticket"></i> Recibo de Pago</a></li>
              </ul>
            </li> 
            <li class="active treeview">
              <a href="#">
                <i class="fa fa-user-secret"></i> <span>Seguridad</span> <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li class="active"><a href="index.html"><i class="fa fa-sticky-note-o"></i> Politicas</a></li>
                <li><a href="index2.html"><i class="fa fa-key"></i> Cambio de Contraseña</a></li>
              </ul>
            </li>  
        </ul>
    )
}
