
import { HooksPrincipales, UseEffect, UseState } from "./"
import { PropsTypeComponent } from "./Methods"


export const Hooks = () => {

    //style
    const style = {
        height: '40vh',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        flexDirection: 'column',
        gap: '20',
        color: 'white',
        boxSizing: 'content-box'
    }

    const propType = () => 'function'
    return (
        <div style={ style }>
            {/* <HooksPrincipales /> */}
            <PropsTypeComponent 
                name='Noe'
                age={40}
                dev={true}
                array={ ['uno', 'dos', 'tres'] }
                objeto= {{a:1, b:2}}
                funcion={ propType }
            />
            <UseState />
            <UseEffect />
        </div>
    )
}

