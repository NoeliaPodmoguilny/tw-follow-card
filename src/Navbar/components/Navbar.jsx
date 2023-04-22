import { NavbarItem, NavbarLogo, NavbarSearch } from "./"
import { NavbarLayout } from "../layouts/NavbarLayout.jsx"


// con export const Navbar = () => {}  si o si cuando hacemos el import usamos { }


// export const Navbar = ( props ) => {  --> desestructuracion más extensa
// export const Navbar = ({ menu }) => {
    // console.log(props.menu); <-- asi ingreso a la clave menu del objeto

    // Pero tmb puedo acceder a la clave desestructurando el obj (armo una const con nombre de la clave entre {} llaves igualo al objeto, y asi luego puedo acceder directamente a esa clave):
    // const { menu } = props --Z Hay una forma más fácil y es pasarlo como parmetro en la Fn (como está más arriba)

export const Navbar = (props) => {
    // console.log(menu);

    //puedo crear una const con el estilo css que quisiera, como si fuera objeto:
    // const navbarStyle = {display: 'flex'} < ya no necesito porque creé el navbarlayout
    //o podemos tmb desde el archivo css pasar el style con un className='nombrestyle' entre comillas

    return (
        // <div style={ navbarStyle }> esto tampoco ya lo necesito poruqe creé el archivo NavbarLayout donde le voy a agregar los style
        // usamos el spread operator '...props' para simplificar cuando son varios elementos en el obj y no sólo 1 (menu)
        <NavbarLayout>
            <NavbarLogo />
            <NavbarItem { ...props } />
            <NavbarSearch />
        </NavbarLayout>
    )
}

// export default Navbar -> cuando usamos de esta manera NO usamos { } en la iport: import Navbar from './...'