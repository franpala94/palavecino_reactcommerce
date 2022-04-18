import ItemList from "./ItemList"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//import productosIniciales from "../data/productos.json"
import { db } from "../Firebase";
import { collection, getDocs, query, where} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemListContainer = (props) => {
    //const onAdd = () => {}
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        if (!id) {
            const prodCollection = collection(db, "productos")
            const documentos = getDocs(prodCollection)

            documentos.then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
            .catch((errorDeLaApi) => {
                toast.error(`Error: ${errorDeLaApi}`, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).finally(() => {
                setLoading(false)
            })

        }else {
            const prodCollection = collection(db, "productos")
            const miFiltro = query(prodCollection, where("category", "==",id))
            const documentos = getDocs(miFiltro)

            documentos.then(respuesta => setProductos(respuesta.docs.map(doc => doc.data())))
            .catch((errorDeLaApi) => {
                toast.error(`Error: ${errorDeLaApi}`, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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
            <ToastContainer />
        </div>

    )
}

export default ItemListContainer