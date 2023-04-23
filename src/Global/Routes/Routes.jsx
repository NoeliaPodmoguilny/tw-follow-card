import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Hooks } from '../../Hooks/components';
import { Productos } from '../components/Productos';
import { Nosotros } from '../components/Nosotros';
import { Contacto } from '../components/Contacto';


export const Routess = () => {
    return (
        <Routes>
            <Route path='/' element={ <Hooks/> } /> 
            <Route path='/productos' element={ <Productos/> } /> 
            <Route path='/nosotros' element={ <Nosotros/> } /> 
            <Route path='/contacto' element={ <Contacto/> } /> 
            {/* path comodin '*' para redirigir una ruta cuando se escribe mal la direccion o whatever... */}
            <Route path='*' element={ <Navigate to='/'/> } /> 
        </Routes>
    )
}

// path='/' esto es la raiz
// por cada link que tengamos debemos tener un Route con su path

