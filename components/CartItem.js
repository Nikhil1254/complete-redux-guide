import { useDispatch } from '../react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../store/slices/cartSlice';

export default function CartItem({ productId, title, rating, price, imageUrl, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(decreaseQuantity({ productId }))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseQuantity({ productId }))}>+</button>
        <button onClick={()=>dispatch(removeItem({productId}))}>Remove</button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  )
}