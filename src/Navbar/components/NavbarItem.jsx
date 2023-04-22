import React from 'react'

export const NavbarItem = ({ menu }) => {
    
    return (
        <div style={{display: 'flex'}}>
            { menu.map( item => 
                <div 
                    key={item}
                    style={{padding: '1rem'}}
                >
                    { item } 
                </div>) 
            }
        </div>
    )
}

