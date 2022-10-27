import React, { useEffect, useState } from 'react'
import { getItem } from '../../UI/services';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../ItemListContainer/itemListContainer.css';


const ItemDetailContainer = ({ title }) => {

    const [item, setItem] = useState([]) //primeros segndos de item es undefined
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            getItem(id)
                .then((e) => { setItem(e) })
                .catch(error => console.error(error))
        }, 2000)
    }, [id])
    console.log(item);
    return (
        <div className='containerItems'>
            <h2 className='text-center'>{title}</h2>
            <seccion className="container row">
                <ItemDetail item={item[0]} />
            </seccion>
        </div>
    )
};
export default ItemDetailContainer;