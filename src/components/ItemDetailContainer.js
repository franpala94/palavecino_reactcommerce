import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
// import productosIniciales from "../data/productos.json";
import { db } from "../Firebase";
import { collection, getDocs, query, where} from "firebase/firestore";


export const ItemListDetail = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const prodCollection = collection(db, "productos")
        const miFiltro = query(prodCollection, where("id", "==",Number(id)))
        const documentos = getDocs(miFiltro)

        documentos.then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())[0]))
        .catch((errorDeLaApi) => {
            console.log(errorDeLaApi)
        }).finally(() => {
            setLoading(false)
        })
    },[id])
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