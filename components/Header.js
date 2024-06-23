import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsError, updateAllProducts } from '../store/slices/productsSlice';
import { fetchCartItems, fetchCartItemsError, updateAllCartItems } from '../store/slices/cartSlice';



export default function Header() {
  const cartItems = useSelector(state => state.cartItems.list);
  const wishlistItems = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetching products
    dispatch({
      type: 'api/fetchProducts',
      payload: {
        url: 'products',
        onStart: fetchProducts.type, // it will return us action type from the action creator
        onSuccess: updateAllProducts.type,
        onFailure: fetchProductsError.type
      }
    })

    // fetching cart items
    dispatch({
      type: 'api/fetchCartItems',
      payload: {
        url: 'carts/3',
        onStart: fetchCartItems.type,
        onSuccess: updateAllCartItems.type,
        onFailure: fetchCartItemsError.type
      }
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