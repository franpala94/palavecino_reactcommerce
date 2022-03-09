import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

let productosIniciales = 
    {
        marca: "AMD",
        modelo: "Ryzen 5",
        descripcion:"generacion 1600, frecuencia: 3.6ghz, nucleos: 6",
        stock: 5,
        precio: 29999,
        img:"https://www.venex.com.ar/products_images/1506966323_crop410_11157ryzen5pibleftfacing1260x709.png",
        id: 0,
        category: "procesador"
    };


export const ItemListDetail = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        promesa.then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
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