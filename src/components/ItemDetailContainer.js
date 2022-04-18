import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
// import productosIniciales from "../data/productos.json";
import { db } from "../Firebase";
import { collection, getDocs, query, where} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    },[id])
    return (
        
        <div class="contenido">
            <h1>Detalle de Producto</h1>
            <p>{loading ? "Cargando, por favor espere.." : "Productos cargados"}</p>
            <ItemDetail product={productos}/>
            <ToastContainer />
        </div>

    )
}

export default ItemListDetail