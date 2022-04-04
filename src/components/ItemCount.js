import React, { useState } from 'react'

export const ItemCount = (props) => {

    const [contador, setContador] = useState(props.initial)

    const aumentar = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }    
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
        
    }
    const resetear = () => {
        props.onAdd(contador)
        setContador(1)
    }
    return (
        
        <div class="contador">
            
            <h3>{props.titulo}</h3>            
            
            <div class="contador__numBar">
                <div>
                    <button class="btnOriginal btn btn-warning" onClick={restar}>-</button> 
                </div>
                
                    <p>{contador}</p>
                
                <div>
                <button class="btnOriginal btn btn-warning" onClick={aumentar}>+</button>
                </div>
                
            </div>            
            <button class="btnEspecial btn btn-warning" onClick={resetear}>Agregar al Carrito</button>
        </div>

    )
}

export default ItemCount