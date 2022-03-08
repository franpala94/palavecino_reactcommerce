import React from 'react'

export const Item = ({product}) => {
    return (
        
        <div class="productos__card">      
            <h3>{product.marca} {product.modelo}</h3>
            
            <div class="productos__img">
                <img src={product.img} alt={product.marca}/>
            </div>
            <p>Precio: $ {product.precio}</p> 
            <p>{product.descripcion}</p>
            <button type="button" class="btnOriginal btn btn-warning" data-bs-toggle="modal" data-bs-target="#QAModal">
                Ver Detalles
            </button>
            
        </div>

    )
}

export default Item