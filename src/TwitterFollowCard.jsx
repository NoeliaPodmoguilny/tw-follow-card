//necesitamos importar una utilidad (HOOKS) useState de React, para añadir funcionalidad al componente
import { useState } from "react"


//ESTO ES UN COMPONENTE QUE SE VA A EXPORTAR HACIA LA APP. SE ARMA LA FN CON LOS PARAMETROS QUE VAN A IR CAMBIANDO 
export function TwitterFollowCard ({ userName, name}) {

    //creamos una const que es un array que tiene 2 posiciones (valor, forma de actualizar el state)
    const [isFollowing, setIsFollowing] = useState(false)


    // RENDERIZADO CONDICIONAL para el button seguir:
    const text = isFollowing
        ? 'Siguiendo' 
        : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

        //CREAMOS FN HANDLECLICK QUE USAMOS EN EL BUTTON:
        const handleClick = () => {
            setIsFollowing(!isFollowing)
        }

    return (
    <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${userName}`} 
                    alt="Foto avatar Noe" />
                <div className="tw-followCard-info">
                    <strong>{ name }</strong>
                    <span
                        className="tw-followCard-infoUserName"> @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                    <span className="tw-followCard-text"> { text } </span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}