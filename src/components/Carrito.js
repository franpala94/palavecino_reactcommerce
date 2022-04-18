import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Carrito = () => {

    const resultado = useContext(contexto)
    const carrito = resultado.carrito
    const cartVisible = resultado.cartVisible
    let totalcolumn = 0
    let cantItems = 0

    const borraItem = (id) => {
        resultado.borrarItem(id)
        toast.success('Item eliminado', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const limpiaItems = () => {
        resultado.limpiarItems()
        toast.success('Todos los items fueron eliminados', {
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
        <div class="carrito">
            <ToastContainer />
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
                    cantItems ++
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
                {cantItems===0 ? <div class="contador__agregado"> <h3>No hay productos agregados</h3> <Link class="nav__link--blk" to="/"><h3 class="detalle__label--amarillo">Ir de compras</h3></Link>  </div> : <></>}
            </div>
            <div class="carrito__titulos">
                <div class="d-flex flex-row justify-content-center">
                    <i class='bx bx-check-shield detalle__pagos' ></i>
                    <p>Compra protegida</p>
                </div>
                
                <h3>Total: $ {totalcolumn}</h3>
            </div>
            <div>
                {cartVisible? <Link class="btnOriginal btn btn-warning" to="/checkout">Terminar Compra</Link> : <></>}
            </div>
            
        </div>
        
        
    )
}

export default Carrito