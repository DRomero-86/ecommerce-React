import { Link } from 'react-router-dom'
import './itemListContainer.css';

const Item = ({ item }) => {
  return (
    <div className='col-lg-4 col-sm-12'>
      <div className="articlesCards">
        <div className="cardsItem">
          <div className="cardImag text-center mb-3">
            <img className=" w-100" src={item.img} alt={item.description}></img>
            <Link to={`/item/${item.id}`} className='text-decoration-none w-100 p-1'><strong>Ver mas</strong></Link>
          </div>
          <div className="cardsBody card-body">
            <h4>{item.description}</h4>
            <p className='cardsParagraph'>{item.brand}</p>
            <p className='cardsParagraph'>Valor: ${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item