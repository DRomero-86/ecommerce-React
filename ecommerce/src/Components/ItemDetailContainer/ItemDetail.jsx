import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ item }) => {

  const { addToCart } = useContext(CartContext)
  // const navigate = useNavigate()
  const [msg, setMsg] = useState(false)

  console.log('itemToAdd', item)

  const handleAdd = (qtyToAdd) => {

    if (qtyToAdd === 0) { setMsg('Seleccione la cantidad deseada')
  } else {
    addToCart(item, qtyToAdd)
    const message = `agregaste ${qtyToAdd} productos al carrito`
    qtyToAdd === 1 ? setMsg(`agregaste ${qtyToAdd} producto al carrito`) : setMsg(`${message}`)
    // navigate('/cart')
  }
}
  useEffect(() => {
    console.log('se montó item Detail')
  }, [])

  if (item) {
    return (
      <div className='container col-lg-8 d-flex'>
        <img className='w-50 p-2' src={item.img} alt={item.description} />
        <div className='w-50 cardsItem'>
          <div className="cardsBody card-body text-center bg-dark text-white">
            <p className="cardsParagraph text-reset">{item.description}</p>
            <p className="cardsParagraph text-reset">Modelo: {item.model}</p>
            <p className="cardsParagraph text-reset">Valor: ${item.price}</p>
            <ItemCount stock={item.stock} onAdd={handleAdd} initial={0} />
            <p className="cardsParagraph w-100 text-center pt-2"> <small>Stock: {item.stock} un</small> </p>
          </div>
          <div><b>{msg && <p className="text-center mt-2">{msg}</p>}</b></div>
        </div>
      </div>
    )
  } else {
    return (<h3 className='text-center'><small>loading...</small></h3>)

  }
}
export default ItemDetail;
