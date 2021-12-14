import React, { Component } from 'react';
import Formulario from '../../Formulario';
import Titulo from '../../Titulo';
import Alert from '../Alert';
import Box from '../Box';
import Callout from '../Callout';
import { FormApplication } from '../FormApplication/FormApplication';
import { FormCertificate } from '../FormCertificate/FormCertificate';
import { FormMainEmp } from '../FormMainEmp/FormMainEmp';
import { FormPayment } from '../FormPayment/FormPayment';
import TableUsers from '../TableUsers';
import Tabs from '../Tabs/';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <Titulo titulo={'Administrador'} subtitulo={'Bienvenido'}/>
                    </section>
                    <section className="content">
                        <div className="row">
                            <Titulo titulo={'Lista de Usuarios'}/>
                            <TableUsers />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-info btn-lg" >Crear Usuario</button>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <FormApplication />
                            
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <FormCertificate />
                        </div>
                    </section>

                    <section className="content">
                        <div className="row">
                            <FormMainEmp />
                        </div>
                    </section>

                    <section className="content">
                        <div className="row">
                            <FormPayment/>
                        </div>
                    </section>
                </div>
                
            </div>
        );
    }
}

export default Dashboard;