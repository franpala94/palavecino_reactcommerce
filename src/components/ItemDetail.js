import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { contexto } from "./CartContext"

export const ItemDetail = ({product}) => {
    const [ICount, setICount] = useState(true)

    let cuotas = product.precio/12
    const resultado = useContext(contexto)

    const onAdd = (cantidad) => {
        resultado.agregarItem(product, cantidad)
        setICount(false)
    }

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
                
                {ICount ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> : <div class="contador"> <h3 class="detalle__label--amarillo">Producto agregado</h3> </div>}
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