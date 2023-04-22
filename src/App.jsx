import { Navbar } from './Navbar/components/Navbar.jsx';
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css';


// array menu
const menu = ['Inicio', 'Productos', 'Nosotros', 'Contacto']


//array de usars 
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

