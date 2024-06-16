import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cartItems.list.map((cartItem) => {
      const product = state.products.list.find(product => product.id === cartItem.productId)
      return { ...product, quantity: cartItem.quantity }
    })
  });
  const { loading, error } = useSelector(state => state.cartItems);

  if (loading)
    return <h3 style={{ textAlign: 'center' }}>Fetching Cart Items !</h3>;

  if (error)
    return <h3 style={{ textAlign: 'center' }}>{error}</h3>;


  if (cartItems.length > 0)
    return (
      <div className="cart-container">
        <h2>Items in Your Cart</h2>
        <div className="cart-items-container">
          <div className="cart-header cart-item-container">
            <div className="cart-item">Item</div>
            <div className="item-price">Price</div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
          </div>
          {cartItems.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          ))}
          <div className="cart-header cart-item-container">
            <div></div>
            <div></div>
            <div></div>
            <div className="total">${
              cartItems.reduce((acc, curr) => {
                return acc + (curr.quantity * curr.price);
              }, 0).toFixed(2)
            }</div>
          </div>
        </div>
      </div>
    )

  return <></>
}