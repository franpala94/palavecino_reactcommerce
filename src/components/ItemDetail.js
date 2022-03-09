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
                    <div class="detalle__box--amarillo">
                        <h6>Nuevo</h6>
                    </div>                    
                    <h3>{product.marca} {product.modelo} {product.category}</h3>
                    <h1 class="detalle__label--amarillo">$ {product.precio}</h1>
                    <h6>en 12x $ {cuotas.toFixed(2)}</h6>
                    <h6>Todos los medios de pago.</h6>
                    <div class="detalle__pagos">
                        <i class='bx bxl-visa' ></i>
                        <i class='bx bxl-mastercard' ></i>
                        <i class='bx bxs-bank' ></i>
                        <i class='bx bx-money'></i>
                        <i class='bx bxl-paypal' ></i>                        
                    </div>
                </div>
                
                <ItemCount stock={product.stock} initial={1}/>
                <div class="d-flex flex-row justify-content-center">
                    <i class='bx bx-check-shield detalle__pagos' ></i>
                    <p>Compra protegida</p>
                </div>

                <div class="detalle__item--center">
                    <h5>Descripción</h5>
                    <p>{product.descripcion}</p>
                </div> 
            </div>
        </div>

    )
}

export default ItemDetail