import React, {useState, useEffect} from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
// import { useEffect } from 'react';


function Cart({ items }) {
    const [productos, setProductos]= useState([])
    setProductos(items[0])
    console.log('items:', items)
    useEffect(() => {
       
    }, [{items}])

    // const aaaa = items.forEach((item)=> item.description)
    // console.log('itemavapvugijearpiges:', aaaa)

   
          return<>{

        productos.forEach((item) => {
           
                <p>{item.description}
                    <th scope="row">{item.qty}</th>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.qty}</td>
                    <td><BsFillTrashFill /></td>
                </p>
            })
          }
          </>  
        
}

export default Cart