import { useContext } from "react"
import { contexto } from "./CartContext"


const Carrito = () => {

    const resultado = useContext(contexto)
    const carrito = resultado.carrito
    const total = resultado.total
    let totalcolumn = 0

    console.log(carrito)


    const borraItem = (id) => {
        resultado.borrarItem(id)
    }
    const limpiaItems = () => {
        resultado.limpiarItems()
    }

    return (
        <div class="carrito">
            <div class="carrito__titulos">
                <h2>Carrito</h2>
            </div>
            <div class="carrito__container">
                    <div class="carrito__item">      
                        <div class="carrito__img">
                            <h3>Item</h3>
                        </div>
                        <div class="carrito__desc">
                            <h3>Producto</h3>
                        </div>
                        <div class="carrito__img">
                            <h3>Cantidad</h3>
                        </div>
                        <div class="carrito__img">                   
                            <h3>Precio/u</h3>
                        </div>
                        <div class="carrito__img">                   
                            <h3>Precio</h3>
                        </div>
                        <div class="carrito__x">
                            <button class="btn btn-warning" onClick={() => limpiaItems()}><i class='bx bx-x bx-md'></i></button>
                        </div>
                    </div>
                {carrito.map(item => {
                    let precioRow = item.cantidad*item.precio
                    totalcolumn += precioRow
                    return (
                    <div class="carrito__item">      
                        <div class="carrito__img">
                            <img src={item.img} alt={item.marca}/>
                        </div>
                        <div class="carrito__desc">
                            <h3>{item.marca} {item.modelo}</h3>
                        </div>
                        <div class="carrito__img">
                            <h3>{item.cantidad}</h3>
                        </div>
                        <div class="carrito__img">
                            <h3>$ {item.precio}</h3>
                        </div>
                        <div class="carrito__img">
                            <h3>$ {precioRow}</h3>
                        </div>
                        <div class="carrito__x">
                            <button class="btn btn-warning" onClick={() => borraItem(item.id)}><i class='bx bx-x'></i></button>
                        </div>
                    </div>)                    
                })}
            </div>
            <div class="carrito__titulos">
                <div class="d-flex flex-row justify-content-center">
                    <i class='bx bx-check-shield detalle__pagos' ></i>
                    <p>Compra protegida</p>
                </div>
                
                <h3>Total: $ {totalcolumn}</h3>
            </div>        
            
        </div>
        
        
    )
}

export default Carrito