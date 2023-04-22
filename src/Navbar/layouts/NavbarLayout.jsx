import React from 'react'

export const NavbarLayout = ({ children }) => {
    
    const styleNavbarItem = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        width: '100vw',
        paddingTop: '1rem',
        paddingBottom: '1rem',

        fontFamily: 'bold',
        backgroundColor: 'white'
    }

    return (
        <div style={styleNavbarItem}>
            { children }
        </div>
    )
}

