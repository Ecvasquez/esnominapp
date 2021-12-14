import React,{useState} from 'react'
import { Payment } from '../../Payment/Payment'
import Titulo from '../../Titulo'

export const FormPayment = () => {
    const [txtcedula, setTxtcedula] = useState('')
    const [txtnombre, setTxtnombre] = useState('')
    const [txtapellido, setTxtapellido] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const cambiocedula = (e)=>setTxtcedula(e.target.value)
    const cambionombre = (e)=>setTxtnombre(e.target.value)
    const cambioapellido = (e)=>setTxtapellido(e.target.value)
    const cambioyear = (e)=>setYear(e.target.value)
    const cambiomonth = (e)=>setMonth(e.target.value)

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
            <Titulo titulo={"Recibos de Pago"}/>
            <form className="form-group" onSubmit={validardatos}>
                <div className="row">
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

                    </div>

                    <div className="row">
                        <div className="mb-3 col">
                            <label for="year">Año</label>
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="year" 
                                    name="year" 
                                    onChange={cambioyear} >
                                <option selected>Seleccione año</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                            </select>
                        </div>
                        <div className="mb-3 col">
                            <label for="month">Mes</label>
                            <select className="form-select" 
                                    aria-label="Default select example" 
                                    id="month" 
                                    name="month" 
                                    onChange={cambiomonth} >
                                <option selected>Seleccione mes</option>
                                <option value={'Enero'}>Enero</option>
                                <option value={'Febrero'}>Febrero</option>
                                <option value={'Marzo'}>Marzo</option>
                                <option value={'Abril'}>Abril</option>
                                <option value={'Mayo'}>Mayo</option>
                                <option value={'Junio'}>Junio</option>
                                <option value={'Julio'}>Julio</option>
                                <option value={'Agosto'}>Agosto</option>
                                <option value={'Septiembre'}>Septiembre</option>
                                <option value={'Octubre'}>Octubre</option>
                                <option value={'Noviembre'}>Noviembre</option>
                                <option value={'Diciembre'}>Diciembre</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group">
                            <div className="mb-3 col">
                                <button type="submit" class="fa fa-check-square">Buscar</button>
                            </div>
                            <div class="mb-3 col">
                                <button type="submit" class="fa fa-check-square">Generar</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </form>
            <Payment />
        </div>
    )
}
