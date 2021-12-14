import React,{ useState } from 'react'
import './Formulario.css'

export const Formulario = () => {
    const [txtcodigo, setTxtcodigo] = useState('')
    const [txtnombre, setTxtnombre] = useState('')
    const [txtdescripcion, setTxtdescripcion] = useState('')
    const [txtcategoria, setTxtcategoria] = useState('1')
    const [error, setError] = useState('')

    const cambionombre = (e)=>setTxtnombre(e.target.value)
    const cambiodescripcion = (e)=>setTxtdescripcion(e.target.value)
    const cambiocategoria = (e)=>setTxtcategoria(e.target.value)
    const validardatos = (e)=>{
        if (txtnombre.length === 0)
            setError('ERROR: introduzca nombre')
        else if (txtdescripcion.length === 0)
            setError('ERROR: introduzca descripcion')
        else 
            alert('Datos correctos')
            setError('')
    }

    const Error = ()=>(error && <p>Error</p>)

    return (
        <div className="container-fluid principal">
            <form className='form-floating' onSubmit={validardatos}>
                {/*cantidad de elementos del formulario*/}
                <div className="form-floating mb-3">
                
                <input type="text" 
                       className="form-control" 
                       id="txtcodigo" 
                       name="txtcodigo" 
                       value={txtcodigo} 
                       readonly/>
                <label htmlFor="txtcodigo">Codigo</label>
                </div>
                <div className="form-floating mb-3">
                
                    <input type="text" 
                        className="form-control" 
                        id="txtnombre" 
                        name="txtnombre" 
                        value={txtnombre} 
                        onChange={cambionombre}
                        />
                    <label for="txtnombre">Nombre</label>           
                </div>
                <div className="form-floating mb-3">
                    <textarea 
                        className="form-control" 
                        id="txtdescripcion" 
                        name="txtdescripcion" 
                        rows="5"
                        cols="60" 
                        onChange={cambiodescripcion}
                        >
                        {txtdescripcion}
                    </textarea>
                    <label for="txtdescripcion">Descripcion</label>
                </div>
                <div className="form-floating mb-3">
                    
                    <select className="form-control" 
                        id="txtcategoria" 
                        name="txtcategoria"  
                        onChange={cambiocategoria}
                        required>
                        <option value="1">Carro</option>
                        <option value="2">Moto</option>
                        <option value="3">Tren</option>
                    </select>
                    <label for="txtcategoria">Categoria</label>
                </div>
                <div>
                    
                <div className="col-9"><Error /></div>
                    <div className="col">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
                    
        </div>
    )
}
