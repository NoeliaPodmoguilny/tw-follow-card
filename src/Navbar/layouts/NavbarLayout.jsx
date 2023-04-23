import React from 'react'

export const NavbarLayout = ({ children }) => {
    
    const styleNavbarItem = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',

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

