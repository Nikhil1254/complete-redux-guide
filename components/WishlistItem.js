import { useDispatch } from 'react-redux'
import { removeFromWishList } from '../store/slices/wishlistSlice';

function WishlistItem({productId, title, imageUrl, rating, price}) {
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
            <div className="item-price">${price.toFixed(2)}</div>
            <div className="item-price">★ {rating}</div>
            <div className="item-price"><button onClick={()=>dispatch(removeFromWishList({productId}))}>Remove</button></div>
        </div>
    )
}

export default WishlistItem