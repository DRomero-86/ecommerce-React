import React from 'react';
import Item from './Item';
import './itemListContainer.css';

const ItemList = ({ items }) => {
    return (
        <div className=''>
            <div className='container d-flex flex-wrap'>
                {items.map(i => {
                    return <Item
                        key={i.id}
                        item={i} />
                })
                }
            </div>
        </div>
    )
}

export default ItemList