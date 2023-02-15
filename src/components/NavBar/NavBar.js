import './navBar.css'
import Logo from '../../imagenes/logos/FelCan.png';
import Carrito from './NavBarImg/CarritoCompras';

const NavBar = ()=>{
    return(
        <div className='navBar'>
            <ul>
                <li className='nav-img_logo'>
                    <img src={Logo} alt='Logo FelCan' />
                </li>
            </ul>
            <ul className="nav-ul">
                <li className="nav-ul_li"><a href="App.js">Inicio</a></li>
                <li className="nav-ul_li"><a href="App.js">Productos</a></li>
                <li className="nav-ul_li"><a href="App.js">Contacto</a></li>
                <Carrito />
          </ul>
        </div>
    )
}


export default NavBar;