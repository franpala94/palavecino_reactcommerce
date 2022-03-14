import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
    return (
        
        <div class="productos__card">      
            <h3>{product.marca} {product.modelo}</h3>
            
            <div class="productos__img">
                <img src={product.img} alt={product.marca}/>
            </div>
            <div class="productos__descr d-flex flex-column justify-content-between">
                <h1>$ {product.precio}</h1>
                <Link to= {`/item/${product.id}`} class="btnOriginal btn btn-warning">
                    Ver Detalles
                </Link>
            </div>
            
            
        </div>

    )
}

export default Item