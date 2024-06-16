import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsError, updateAllProducts } from '../store/slices/productsSlice';

export default function Header() {
  const cartItems = useSelector(state => state.cartItems);
  const wishlistItems = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        dispatch(updateAllProducts(products));
      }).catch(err => {
        dispatch(fetchProductsError('Something went wrong !'));
      })
  }, [])

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
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{cartItems.reduce((itemCount, item) => (itemCount + item.quantity), 0)}</div>
          </Link>
        </div>
      </div>
    </header>
  )
}