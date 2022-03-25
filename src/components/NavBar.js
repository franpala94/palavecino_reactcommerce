import { Link } from "react-router-dom"
import  CardWidget  from "./CardWidget"
import { useContext } from "react"
import { contexto } from "./CartContext"

function NavBar(){
    const resultado = useContext(contexto)
    const cartVisible = resultado.cartVisible

    return <header>
    <nav class="nav">            
        <div class="nav__firma">
            <Link to="/">
                <img src="logo1.png" alt=""></img>
            </Link>
        </div>
        <div class="nav__cnt">
            
            <input type="checkbox" id="btn-menu" class="nav__ico"></input>
            <label class="nav__ico" for="btn-menu"><i class='bx bx-menu bx-flip-horizontal'  ></i></label>
            
            <ul class="nav__lista">
                <li class="nav__despl"><Link class="nav__link--blk nav__link--baseline" to="/categoria/procesador">Procesadores</Link></li>                
                <li ><Link class="nav__link--blk nav__link--baseline" to="/categoria/placa de video">Placas de video</Link></li>
                <li><Link class="nav__link--blk nav__link--baseline" to="/categoria/notebook">Notebook</Link></li>
                <li><Link class="nav__link--blk nav__link--baseline" to="/categoria/motherboard">Motherboards</Link></li>
                {cartVisible ? <CardWidget/> : <></>}
            </ul>
        </div>
    </nav>       
</header>
}

export default NavBar