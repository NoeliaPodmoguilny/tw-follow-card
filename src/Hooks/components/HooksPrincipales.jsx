import React, { useRef, useState, useEffect } from 'react'

export const HooksPrincipales = () => {

    //useState 

    // (lo mas conveniente es que esten arriba de la fn)
    const [count, setCount] = useState(0) //<- esto es una variable, su fn modificadora o setter, todo esto igual a el valor inicial de la variable
    const [puntitos, setPuntitos] = useState('.')


    //useEffect 

    // useEffect(() => { //primero recibe una fn flecha y luego un array
    //     setTimeout(() => {
    //         setPuntitos(puntitos + '.')
    //     }, 1000);
    //     return () => {
    //         puntitos === '...' && setPuntitos('.')
    //     }
    // }, [puntitos])
    

    //useRef
    
    // es como un metodo que me permite 'tomar' el nodo al que le asigno la variable. Como un 'getElementById'... por convencion al nombre de la variable le agregamos 'Ref' al final
    const botonRef = useRef()

     // Fn button
    const countClickHandler = () => {
        setCount (count + 1)
        // console.log(botonRef.current);
        //esto quiere decir que por ejemplo, yo puedo acceder a estas claves, a los valores del elemento del DOM, y manipularlos (xej cambio el estilo height:...)
        // botonRef.current.style.padding = '4rem' 
        // botonRef.current.style.backgroundColor = 'black' lo que sea puedo cambiar
    }

    const styleButton = { 
        padding: '1rem',  
        fontSize: '2rem',
        borderRadius: '1rem'
    }

    return (
        <div>
            <button
                ref={botonRef}
                style={styleButton}
                onClick={countClickHandler}
            >
                {count + puntitos}
            </button>
        </div>
    )
}

