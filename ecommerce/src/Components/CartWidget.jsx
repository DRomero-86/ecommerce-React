import { BsCart3 } from "react-icons/bs";

const CartWidget = ({cant}) => {
  console.log('CartWidget')

  return (
    <div className='container w-25 d-flex justify-content-end pe-5 align-items-center'>
      <BsCart3/>
      <div className='ps-2'>{cant}</div>
    </div>
  )
}
export default CartWidget