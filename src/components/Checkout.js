import { useContext } from "react"
import { contexto } from "./CartContext"
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {

    const resultado = useContext(contexto)
    const carrito = resultado.carrito
    const cartVisible = resultado.cartVisible

    const finalizaCompra = (total) => {
        let nombre = document.getElementById("nombre").value
        let email = document.getElementById("email").value
        let phone = document.getElementById("phone").value
        const orden = {
            buyer : {
                nombre : nombre,
                telefono: phone,
                email: email
            },
            items : carrito,
            date : serverTimestamp(),
            total : total
        }
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)
        resultado.limpiarItems()
        
    }
    

    let totalcolumn = 0
    let cantItems = 0

    return (        
        <div class="carrito">
            {cartVisible?
            <div class="carrito">
                <div class="carrito__titulos">
                    <h2>Confirmar compra</h2>
                </div>
                <div class="row carrito__container">
                    <legend class="text-center header">Completa Con tus datos</legend>
                    <div class="carrito__container col">                    
                        {carrito.map(item => {
                            cantItems ++
                            let precioRow = item.cantidad*item.precio
                            totalcolumn += precioRow
                            return (
                            <div class="carrito__item">
                                <div class="carrito__desc">
                                    <p>{item.marca} {item.modelo}</p>
                                </div>
                                <div class="carrito__img">
                                    <p>{item.cantidad}</p>
                                </div>
                                <div class="carrito__img">
                                    <p>$ {item.precio}</p>
                                </div>
                                <div class="carrito__img">
                                    <p>$ {precioRow}</p>
                                </div>
                            </div>)                    
                        })}
                        <h3>Total: $ {totalcolumn}</h3>
                    </div>
                    <div class="container col">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="well well-sm">
                                    <form class="form-horizontal" method="post">
                                        <fieldset>
                                            
                                            <div class="form-group">
                                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                                                <div class="col-md-8">
                                                    <input id="nombre" name="name" type="text" placeholder="Nombre" class="form-control"></input>
                                                </div>
                                            </div>
                                            

                                            <div class="form-group">
                                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                                <div class="col-md-8">
                                                    <input id="email" name="email" type="text" placeholder="Email Address" class="form-control"></input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                                                <div class="col-md-8">
                                                    <input id="phone" name="phone" type="text" placeholder="Phone" class="form-control"></input>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                <div class="carrito__titulos">
                    <div class="d-flex flex-row justify-content-center">
                        <i class='bx bx-check-shield detalle__pagos' ></i>
                        <p>Compra protegida</p>
                    </div>
                    
                    
                </div>
                <div>
                    <button onClick={() => finalizaCompra(totalcolumn)} class="btn btn-warning">Finalizar compra</button>
                </div>
            </div>
            : <div class="contador__agregado"> <h3 class="detalle__label--amarillo">Su pedido fue enviado con éxito</h3> <h3 class="detalle__label--amarillo">Gracias por su compra</h3> <Link class="nav__link--blk" to="/"><h3 class="detalle__label--amarillo">Ir a inicio</h3></Link>  </div>}
            
        </div>
    )
}

export default Checkout