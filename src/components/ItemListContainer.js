import ItemList from "./ItemList"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//import productosIniciales from "../data/productos.json"
import { db } from "../Firebase";
import { collection, getDocs, query, where} from "firebase/firestore";



export const ItemListContainer = (props) => {
    //const onAdd = () => {}
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    
    console.log(id)

    useEffect(()=>{

        if (!id) {
            const prodCollection = collection(db, "productos")
            const documentos = getDocs(prodCollection)

            documentos.then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
            .catch((errorDeLaApi) => {
                console.log(errorDeLaApi)
            }).finally(() => {
                setLoading(false)
            })

        }else {
            const prodCollection = collection(db, "productos")
            const miFiltro = query(prodCollection, where("category", "==",id))
            const documentos = getDocs(miFiltro)

            documentos.then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
            .catch((errorDeLaApi) => {
                console.log(errorDeLaApi)
            }).finally(() => {
                setLoading(false)
            })
        }
        
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