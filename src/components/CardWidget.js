import React from 'react'
import { Link } from 'react-router-dom'

export const CardWidget = () => {
    return (
        
        <li>
            <Link class="nav__link--blk nav__link--baseline" to="/categoria/5">
                <div>
                    <button type="button" id="btnCarrito" class="btnCarrito btn btn-warning" data-toggle="modal" data-target="#modalCarrito"><i class='bx bx-cart-alt'></i></button>
                </div> 
            </Link>
        </li>
        
    )
}

export default CardWidget