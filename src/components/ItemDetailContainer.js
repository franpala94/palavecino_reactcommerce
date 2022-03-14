import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import productosIniciales from "../data/productos.json";


export const ItemListDetail = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                const prod = productosIniciales.find(p => p.id === parseInt(id))
                res(prod)
            },1000)
        })

        promesa.then((respuestaDeLaApi)=>{
            setProductos(respuestaDeLaApi)
        }).catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        }).finally(()=>{
            setLoading(false)
        })

        
    })
    console.log(productos)
    return (
        
        <div class="contenido">
            <h1>Detalle de Producto</h1>
            <p>{loading ? "Cargando, por favor espere.." : "Productos cargados"}</p>
            <ItemDetail product={productos}/>
            
        </div>

    )
}

export default ItemListDetail