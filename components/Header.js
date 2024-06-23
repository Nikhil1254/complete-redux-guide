import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import HeartIcon from '../assets/heart-icon.svg';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsError, updateAllProducts } from '../store/slices/productsSlice';
import { fetchCartItems, fetchCartItemsError, updateAllCartItems } from '../store/slices/cartSlice';

async function fetchProductsAndCartItems(dispatch) {
  // fetching products data -
  /**
   * 1.we want to fetch cart items only after products are being fetched
   * 2. as we are looping over products for cartItems logic we might get error if 
   *  products are not loaded first.
   */
  try {
    dispatch(fetchProducts()); // will set loading = true
    const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    dispatch(updateAllProducts(products));
  } catch (err) {
    dispatch(fetchProductsError("Something went wrong !"))
  }

  // fetching carts data - 
  try {
    dispatch(fetchCartItems()); // will set loading = true
    const { products } = await fetch("https://fakestoreapi.com/carts/3").then(res => res.json());
    dispatch(updateAllCartItems(products));
  } catch (err) {
    dispatch(fetchCartItemsError('Something went wrong !'));
  }
}

export default function Header() {
  const cartItems = useSelector(state => state.cartItems.list);
  const wishlistItems = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchProducts());
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(products => {
    //     dispatch(updateAllProducts(products));
    //   }).catch(err => {
    //     dispatch(fetchProductsError('Something went wrong !'));
    //   })
    fetchProductsAndCartItems(dispatch).catch();
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