import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarItem = ({ menu }) => {
    
    return (
        <div style={{display: 'flex'}}>
            { menu.map( item => 
                <Link 
                    key={item}
                    style={{padding: '1rem'}}
                    to={item.link} //aca va la ruta hacia la que quiero direccionar, esto viene del array menu en app.jsx
                >
                    { item.name } 
                </Link>
                )
            }
        </div>
)}