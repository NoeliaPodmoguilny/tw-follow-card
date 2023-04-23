import React from 'react'
import { centerStyle } from '../../Style'
import  PropTypes  from 'prop-types'

export const PropsTypeComponent = ({name, age, dev, array, objeto, funcion}) => {
    
        const style = centerStyle + 'container-fluid bg-primary text-light py-4'
    
        return (
            <div className={ style }
            >
                <h3>PropTypes:</h3>
                <h5>{name}</h5>
                <h5>{age}</h5>
                <h5>{dev.toString()}</h5>
                <h5>{array[1]}</h5>
                <h5>{objeto.a}</h5>
                <h5>{funcion()}</h5>
            </div>
    )
}
//para validar los tipos de datos, usamos el nombre del componente que armamos 'propstypecomponent' y una clave (es como declarar un tipo en typescript) + 'isRequired'
PropsTypeComponent.prototype = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    dev: PropTypes.bool.isRequired,
    array: PropTypes.array.isRequired,
    objeto: PropTypes.object.isRequired,
    funcion: PropTypes.func.isRequired
}


