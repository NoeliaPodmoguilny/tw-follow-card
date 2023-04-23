import { Navbar } from './Navbar/components'
import { TwitterFollowCard } from './FollowCard/TwitterFollowCard.jsx'
import { Routess } from './Global/Routes';
import './App.css';


// array menu
const menu = [
{
    name: 'Inicio',
    link: '/'
    },
{
    name: 'Productos',
    link: './productos'
    },
{
    name: 'Nosotros',
    link: './nosotros'
    },
{
    name: 'Contacto',
    link: './contacto'
    },
]


//array de users 
const users = [
    {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
    },
    {
    userName: 'NPodmoguilny',
    name: 'Noelia Podmoguilny',
    isFollowing: true
    },
    {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
    },
    {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
    },
    {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
    }
]

// EN LA APP VOY ARMANDO EL RENDERIZADO. IMPORTAMOS TODOS LOS COMPONENTES PARA IR ARMANDO LA APP
export function App() {
    return (
    <>
        <section>
            <Navbar menu={ menu } />
            <Routess/>
        </section>

        <section className="App">
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard 
                        // (OJO! para renderizar una lista de elementos en React debemos añadir la KEY!!)
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        ></TwitterFollowCard>
                    )
            })
        }
        </section>
    </>
    )
}
// Los valores de attr booleanos false se pasan entre llaves {}, sino sólo se escribe el attr sin valor                             

