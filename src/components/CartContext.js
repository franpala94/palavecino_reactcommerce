import { createContext, useState } from "react"

export const contexto = createContext()
const{ Provider } = contexto

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)

    const borrarItem = (id) => {
        const carritoFiltrado = carrito.filter (prod => prod.id !== id)
        setCarrito(carritoFiltrado)
    }
    
    const agregarItem = (producto,cantidad) => {
        console.log("agregar")
        const productoAgregar = {
            ...producto,
            cantidad
        }

        isInCart(producto.id) ? updateItem(productoAgregar) : addItem(productoAgregar)
        console.log(carrito)
    }

    const limpiarItems = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const updateItem = (productoAgregar) => {
        const updateCart = carrito.map(prod => {
            if(prod.id === productoAgregar.id) {
                const updateProduct = {
                    ...prod,
                    cantidad: prod.cantidad + productoAgregar.cantidad
                }
                return updateProduct
            }else {
                return prod
            }
        })
        setCarrito(updateCart)        
    }

    const addItem = (productoAgregar) => {
        let add = [...carrito, productoAgregar]
        setCarrito(add)
        
    }

    const valorDelContexto = {
        total,
        carrito,
        borrarItem : borrarItem,
        limpiarItems : limpiarItems,
        agregarItem : agregarItem
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
        
    )
}

export default CartContext