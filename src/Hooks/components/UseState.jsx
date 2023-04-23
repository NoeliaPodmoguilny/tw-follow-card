import React, { useState } from 'react'
import { oddStyle } from '../Style'

export const UseState = () => {

    const [flag, setFlag] = useState(true)
    //como es una funcion flecha que no retorna nada puedo declararla sin las {}:
    const handleClick = () => setFlag(!flag)
    //este es el manejador de click y lo que hace es cambiar el booleano cuando le doy click

    return (
        <div className={ oddStyle }>
            <button
                className='btn btn-dark'
                onClick={handleClick}
            > Cambia el componente </button>
            { flag
                ? <div> Su valor es: { flag.toString() } </div>
                : <span> Su valor es: { flag.toString() } </span>
            }
        </div>
    )
}

