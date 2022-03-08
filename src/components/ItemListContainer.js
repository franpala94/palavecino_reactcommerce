//import ItemCount from "./ItemCount"
//<ItemCount onAdd={onAdd} titulo="Contador" stock={5} initial={1}/>
import ItemList from "./ItemList"
import React, { useState, useEffect } from 'react'

let productosIniciales = [
    {
        marca: "AMD",
        modelo: "Ryzen 5",
        descripcion:"generacion 1600, frecuencia: 3.6ghz, nucleos: 6",
        stock: 5,
        precio: 29999,
        img:"https://www.venex.com.ar/products_images/1506966323_crop410_11157ryzen5pibleftfacing1260x709.png",
        id: 0,
        category: "procesador",
    },
    {
        marca: "AMD",
        modelo: "Ryzen 3",
        descripcion: "generacion: 3200G, frecuencia: 3.6ghz, nucleos: 4",
        stock: 3,
        precio: 36999,
        img:"https://www.venex.com.ar/products_images/1585940629_amd_ryzen_3_3200g_am4.jpg",
        id: 1,
        category: "procesador",
    },
    {
        marca: "AMD",
        modelo: "Ryzen 5",
        descripcion:"generacion: 3600, frecuencia: 3.6ghz, nucleos: 6",
        stock: 2,
        precio: 47999,
        img:"https://www.venex.com.ar/products_images/1590786626_microprocesadoramdryzen53400gstealthcgzen2am4.jpg",
        id: 2,
        category: "procesador",
    }
];

export const ItemListContainer = (props) => {
    //const onAdd = () => {}
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
        
        <main class="contenido">
            <h1>{props.mensaje} {props.mensaje2}</h1>
            
            <p>La cantidad de productos es:</p>
            <p>{loading ? "Cargando, por favor espere.." : "Productos cargados"}</p>
            <ItemList products={productos}/>
            
        </main>

    )
}

export default ItemListContainer