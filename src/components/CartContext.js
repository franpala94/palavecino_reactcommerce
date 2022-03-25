import { createContext, useState } from "react"

export const contexto = createContext()
const{ Provider } = contexto

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [cantItems,setCantItems] = useState(0)
    const [cartVisible, setCartVisible] = useState(false)

    const borrarItem = (id) => {
        const carritoFiltrado = carrito.filter (prod => prod.id !== id)
        setCarrito(carritoFiltrado)
        let c = updateCantItem(carritoFiltrado)
        setCantItems(c)
        visible(carritoFiltrado)
    }
    
    const visible = (array) => {
        let i = 0
        array.forEach(function(item) {
            i = i + 1
        })
        if (i>0) {
            setCartVisible(true)
        } else {
            setCartVisible(false)
        }
    }
    
    const agregarItem = (producto,cantidad) => {
        let CI = cantItems + cantidad
        setCantItems(CI)
        const productoAgregar = {
            ...producto,
            cantidad
        }

        isInCart(producto.id) ? updateItem(productoAgregar) : addItem(productoAgregar)
        setCartVisible(true)
    }

    const limpiarItems = () => {
        setCarrito([])
        setCantItems(0)
        setCartVisible(false)
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
    const updateCantItem = (carro) => {
        let c = 0
        for (let i = 0; i < carro.length; i++) {
            c = c + carro[i].cantidad
            
        }
        return c
    }
    

    const valorDelContexto = {
        carrito,
        cantItems,
        cartVisible,
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