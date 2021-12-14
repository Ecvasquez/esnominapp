import React from 'react'

export const Certificado = (props) => {
    const fecha = new Date();
    return (
            <p>
               <div>
                Buenos Aires, {fecha.toLocaleDateString()}<br />

                A QUIEN CORRESPONDA:
                Por este medio le informo que el señor {props.name} {props.lastname}con documento Número {props.cedula} se desempeña <br />
                en el sector de {props.dependencia} desde el {props.fechainicio}.<br />
                Durante ese período, el señor {props.name} {props.lastname} ocupa el puesto de {props.cargo} percibiendo un salario promedio bruto de:<br />
                {props.salario} pesos colombianos.<br /><br />
                Sin más lo saluda atte. <br /><br /><br />
                (Firma, sello y aclaración)
                </div>
            </p>
    )
}
