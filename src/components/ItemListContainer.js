import React from 'react'
import ItemCount from "./ItemCount"

export const ItemListContainer = (props) => {
    const onAdd = () => {}
    return (
        
        <main class="contenido">
            <h1>{props.mensaje} {props.mensaje2}</h1>
            <ItemCount onAdd={onAdd} titulo="Contador" stock={5} initial={1}/>
        </main>

    )
}

export default ItemListContainer