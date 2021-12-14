import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Container } from 'react-bootstrap'
import { Politicas } from '../Politicas/Politicas'
import MainAdmin from '../MainAdmin'
import { FormUser } from '../FormUser/FormUser';
import { ReporteNomina } from '../ReporteNomina/ReporteNomina';
import { TableAprobarSolicitudes } from '../TableAprobarSolicitudes/TableAprobarSolicitudes';
import { ReporteEmpleados } from '../ReporteEmpleados/ReporteEmpleados';
import { FormApplication } from '../FormApplication/FormApplication';
import { FormCertificate } from '../FormCertificate/FormCertificate';
import { FormPayment } from '../FormPayment/FormPayment';
import {FormMainEmp} from '../FormMainEmp/FormMainEmp';
import { FormCambioClave } from '../FormCambioClave/FormCambioClave';

export const DashboardContent = () => {
    return (
        <Container>
            <Routes>
                <Route path="/mainusuario" element={<MainAdmin />} />
                <Route path="/users" element={<FormUser />} />
                <Route path="/empleados" element={<FormMainEmp />} />
                <Route path="/nomina" element={<ReporteNomina />} />
                <Route path="/respuestasolicitud" element={<TableAprobarSolicitudes />} />
                <Route path="/salarios" element={<ReporteEmpleados />} />
                <Route path="/solicitud" element={<FormApplication />} />
                <Route path="/certificado" element={<FormCertificate />} />
                <Route path="/recibopago" element={<FormPayment />} />
                <Route path="/politicas" element={<Politicas/>} />
                
                <Route path="/cambioclave" element={<FormCambioClave />} />
                
                
            </Routes>
            
        </Container>
    )
}
