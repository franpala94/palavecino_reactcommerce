import React from 'react'
import Item from './Item'

export const ItemList = ({products}) => {
    
    
    return (
        <ul class="productos">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul>
    )
}

export default ItemList