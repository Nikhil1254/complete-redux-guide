import React from 'react'
import { useSelector } from '../react-redux';
import WishlistItem from '../components/WishlistItem';

function Wishlist() {
    const wishlistItems = useSelector(state=>state.wishList);

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="item-price">Rating</div>
          <div className="item-price">Action</div>
        </div>
        {wishlistItems.map(({ productId, title, rating, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {/* <div className="total">${
            cartItems.reduce((acc, curr) => {
              return acc + (curr.quantity * curr.price);
            }, 0).toFixed(2)
          }</div> */}
        </div>
      </div>
    </div>
  )
}

export default Wishlist