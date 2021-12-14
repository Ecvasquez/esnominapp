import React,{useState} from 'react'
import Titulo from '../../Titulo'

export const FormApplication = () => {
    const [solicitud, setSolicitud] = useState('')
    const [txtfechainicio, setTxtfechainicio] = useState('')
    const [txtfechafinal, setTxtfechafinal] = useState('')
    const [txtjustificacion, setTxtjustificacion] = useState('')

    const cambiosolicitud = (e)=>setSolicitud(e.target.value)
    const cambiofechainicio = (e)=>setTxtfechainicio(e.target.value)
    const cambiofechafinal = (e)=>setTxtfechafinal(e.target.value)
    const cambiojustificacion = (e)=>setTxtjustificacion(e.target.value)

    const validardatos = (e)=>{
        if (txtfechainicio.length === 0)
            alert('ERROR: introduzca nombre')
        else if (txtfechafinal.length === 0)
            alert('ERROR: introduzca descripcion')
        else if (txtjustificacion.length === 0)
            alert('ERROR: introduzca descripcion')
        else 
            alert('Datos correctos')
    }
   

    return (
        <div className="container-fluid">
            <Titulo titulo={"Solicitudes"}/>
            <form onSubmit={validardatos}>
                <div className="row">
                    <div className="form-group">
                        <label for="solicitud">Tipo Solicitud</label>
                        <div className="mb-3 col">
                            
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="solicitud" 
                                    name="solicitud" 
                                    onChange={cambiosolicitud} >
                                <option selected>Seleccione una opcion</option>
                                <option value={1}>Vacaciones</option>
                                <option value={2}>Permisos</option>
                            </select>
                        </div>
                        <div className="form-group"> 
                            <div class="mb-3 col">
                                <button type="submit" class="fa fa-check-square">enviar</button>
                            </div>
                        </div>
                    </div>
                       
                    
                </div>
                

                <div className="row">
                <div className="form-group"> 
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Fecha Inicio</label>
                        <div className="col-sm-10">
                            <input type="date" 
                                   className="form-control-plaintext" 
                                   id="fechainicio" 
                                   name="fechainicio" 
                                   value={txtfechainicio}
                                   onChange={cambiofechainicio}
                                   />
                        </div>
                    </div>
                </div>
                    
                    <div className="form-group"> 
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Fecha Final</label>
                            <div className="col-sm-10">
                                <input type="date" 
                                    className="form-control-plaintext" 
                                    id="fechafinal"
                                    name="fechafinal" 
                                    value={txtfechafinal}
                                    onChange={cambiofechafinal}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="form-group">
                        <label for="justificacion" class="form-label">Justificacion</label>
                        <textarea 
                            class="form-control" 
                            id="justificacion"
                            name="justificacion" 
                            rows="10"
                            cols="30" 
                            onChange={cambiojustificacion}>
                                {txtjustificacion}
                        </textarea>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
