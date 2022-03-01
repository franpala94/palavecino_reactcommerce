import React from 'react'

export const CardWidget = () => {
    return (
        
        <li>
            <a class="nav__link--blk nav__link--baseline" href="*">
                <div>
                    <button type="button" id="btnCarrito" class="btnCarrito btn btn-primary" data-toggle="modal" data-target="#modalCarrito"><i class='bx bx-cart-alt'></i></button>
                </div> 
            </a>
        </li>
        
    )
}

export default CardWidget