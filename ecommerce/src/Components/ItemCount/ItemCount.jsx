import { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  function increment() {
    return (count < stock) ? setCount(count + 1) : alert(`Alcanzaste el stock disponible`)
  }

  function decrement() {
    return (count >= 1) && setCount(count - 1)
  }

  useEffect(() => {
    setCount(initial)
  }, [onAdd]
  )

  return (
    <>
      <div className='container w-100 mt-4'>
        <div className='container d-flex justify-content-around align-items-baseline'>
          <button className='btn btn-danger' onClick={decrement}> - </button>
          <p className='mx-2'><b>{count}</b></p>
          <button className='btn btn-success' onClick={increment}> + </button>
        </div>
        <div className='pb-2 wx-auto w-100'>
          <button className='btn btn-success mt-2 border-white' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
      </div>
    </>
  )
}
export default ItemCount;


