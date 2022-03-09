import React from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({product}) => {
    let cuotas = product.precio/12

    return (
        
        <div class="detalle__card">      
            <div class="detalle__img">
                <img src={product.img} alt={product.marca}/>
            </div>
            <div class="detalle__descripcion">
                <div class="detalle__item--izq">
                    <h6>Nuevo</h6>
                    <h3>{product.marca} {product.modelo} {product.category}</h3>
                    <h1>$ {product.precio}</h1>
                    <h6>en 12x $ {cuotas.toFixed(2)}</h6>
                    <h6>Todos los medios de pago.</h6>
                </div>   

                <ItemCount stock={product.stock} initial={1}/>

                <div class="detalle__item--center">
                    <h5>Descripcion</h5>
                    <p>{product.descripcion}</p>
                </div>
                
            </div>
            
            
        </div>

    )
}

export default ItemDetail