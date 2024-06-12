import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg';
import { useSelector } from 'react-redux'

export default function Header() {
  const cartItems = useSelector(state => state.cartItems);
  const wishlistItems = useSelector(state => state.wishList);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div>
          <Link className="cart-icon" to="/wishlist">
            <img height={31} src={HeartIcon} alt="cart-icon" />
            <div className="cart-items-count">{wishlistItems.length}</div>
          </Link> &nbsp;
          <Link className="cart-icon" to="/cart">
            <img  src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{cartItems.reduce((itemCount, item) => (itemCount + item.quantity), 0)}</div>
          </Link>
        </div>
      </div>
    </header>
  )
}