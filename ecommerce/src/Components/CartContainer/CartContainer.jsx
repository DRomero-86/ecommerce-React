import React, { useState, useEffect, useContext } from 'react'
import Cart from './Cart';
import { CartContext } from '../../context/CartContext';

function CartContainer() {
    const { cart, cartInCart } = useContext(CartContext)
    const [products, setProducts] = useState([])

    // console.log('array de carrito:', products);
    // console.log('cartInCart:', cartInCart);
    useEffect(() => {
        setProducts(cart)
    }, [Cart])

    return (<>
        <h3 className='text-center'>Detalle de la compra</h3>
        <div className='container '>

        <table class=" container table table-sm table-dark mt-5">

            <tbody>
                <Cart items={products} />
                <tr>
                    <th scope="row">{cartInCart}</th>
                    <td> </td>
                    <td> Total </td>
                    <td>'TotalAPagar'</td>
                </tr>
        
            </tbody>
        </table>
        <button className='btn btn-success w-25'>Finalizar Compra</button>
        </div>
    </>
    )
};

export default CartContainer