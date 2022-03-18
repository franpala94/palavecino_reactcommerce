//import ItemCount from "./ItemCount"
//<ItemCount onAdd={onAdd} titulo="Contador" stock={5} initial={1}/>
import ItemList from "./ItemList"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import productosIniciales from "../data/productos.json"


export const ItemListContainer = (props) => {
    //const onAdd = () => {}
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    
    

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log(id)
                const productsToResolve = id ? productosIniciales.filter(item => item.category === id) : productosIniciales
                res(productsToResolve)
            },1000)
        })

        promesa.then((respuestaDeLaApi)=>{
            setProductos(respuestaDeLaApi)
        }).catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        }).finally(()=>{
            setLoading(false)
        })

        
    },[id])
    
    return (
        
        <div class="contenido">
            <h1>Bienvenidos a Pro Gaming</h1>
            
            <p>{loading ? "Cargando, por favor espere.." : "Productos cargados"}</p>
            <ItemList products={productos}/>
            
        </div>

    )
}

export default ItemListContainer