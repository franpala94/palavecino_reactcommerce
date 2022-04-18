import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({product}) => {
    const [ICount, setICount] = useState(true)

    let cuotas = product.precio/12
    const resultado = useContext(contexto)

    const onAdd = (cantidad) => {
        resultado.agregarItem(product, cantidad)
        setICount(false)
        toast.success(`Producto agregado:${product.marca} ${product.modelo}`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                
                {ICount ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> : <div class="contador__agregado"> <h3 class="detalle__label--amarillo">Producto agregado</h3> <Link class="nav__link--blk" to="/carrito"><h3 class="detalle__label--amarillo">Ir al Carrito</h3></Link>  </div>}
                <div class="d-flex flex-row justify-content-center">
                    <i class='bx bx-check-shield detalle__pagos' ></i>
                    <p>Compra protegida</p>
                </div>

                <div class="detalle__item--center">
                    <h5>Descripción</h5>
                    <p>{product.descripcion}</p>
                </div> 
            </div>
            <ToastContainer />
        </div>

    )
}

export default ItemDetail