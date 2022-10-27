import { useContext} from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cartInCart} = useContext(CartContext)
  console.log('qtyToShow:', cartInCart)

if (cartInCart === 0) { 
  return <> </>}

  return (
    <div className='container w-25 d-flex justify-content-end pe-5 align-items-center'>
      <Link to='/cart'><BsCart2 /></Link>
      <div className='ps-2'>{cartInCart}</div>
    </div>
  )
}

export default CartWidget