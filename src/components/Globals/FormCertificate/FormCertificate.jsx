import React,{useState} from 'react'
import { Certificado } from '../../Certificado/Certificado'
import Titulo from '../../Titulo'

export const FormCertificate = () => {
    const [txtcedula, setTxtcedula] = useState('')
    const [txtnombre, setTxtnombre] = useState('')
    const [txtapellido, setTxtapellido] = useState('')

    const cambiocedula = (e)=>setTxtcedula(e.target.value)
    const cambionombre = (e)=>setTxtnombre(e.target.value)
    const cambioapellido = (e)=>setTxtapellido(e.target.value)

    const validardatos = (e)=>{
        if (txtcedula.length === 0)
            alert('ERROR: introduzca cedula')
        else if (txtnombre.length === 0)
            alert('ERROR: introduzca nombre')
        else if (txtapellido.length === 0)
            alert('ERROR: introduzca apellido')
        else 
            alert('Datos correctos')
    }
   

    return (
        <div className="container-fluid">
            <Titulo titulo={"Certificaciones"}/>
            <form onSubmit={validardatos}>
                <div className="row">
                    <div className="form-group">
                        <div className="mb-3 row">
                            <label htmlFor="cedula" className="col-sm-2 col-form-label">Cédula</label>
                            <div className="col-sm-10">
                                <input type="text" 
                                    className="form-control-plaintext" 
                                    id="cedula" 
                                    name="cedula" 
                                    value={txtcedula}
                                    onChange={cambiocedula}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="mb-3 row">
                            <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombres</label>
                            <div className="col-sm-10">
                                <input type="text" 
                                    className="form-control-plaintext" 
                                    id="nombre" 
                                    name="nombre" 
                                    value={txtnombre}
                                    onChange={cambionombre}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="mb-3 row">
                            <label htmlFor="apedillo" className="col-sm-2 col-form-label">Apellidos</label>
                            <div className="col-sm-10">
                                <input type="text" 
                                    className="form-control-plaintext" 
                                    id="apellido" 
                                    name="apellido" 
                                    value={txtapellido}
                                    onChange={cambioapellido}
                                    />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <div className="mb-3 col">
                            <button type="submit" class="fa fa-check-square">Buscar</button>
                        </div>
                        <div class="mb-3 col">
                            <button type="submit" class="fa fa-check-square">Generar</button>
                        </div>
                    </div>
                </div>
            </form>
            <Certificado />
        </div>
    )
}
