import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { contexto } from "./CartContext"

export const CardWidget = () => {

    const resultado = useContext(contexto)
    const cantItems = resultado.cantItems

    return (
        
        <li>
            <Link class="nav__link--blk nav__link--baseline" to="/carrito">
                <div>
                    <button type="button" id="btnCarrito" class="btnCarrito btn btn-warning"><i class='bx bx-cart-alt'></i><span class="cart__num">{cantItems}</span></button>
                </div> 
            </Link>
        </li>
        
    )
}

export default CardWidget