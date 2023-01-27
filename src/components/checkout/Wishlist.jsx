import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromWishlist } from '../../store/dataSlice';
import './scss/checkout.css';

const Wishlist = () => {
    // SELECTORS
    const wishlist = useSelector(state => state.data.wishlist);
    // DISPATCH
    const dispatch = useDispatch();
    // NAVIGATE
    const navigate = useNavigate();
    const length = wishlist.length;

    return (
        <div>
            <div className='Wishlist'>
                <h1>Wishlist ( {length} )</h1>
                <div className="Wishlist__cta">
                    <button className='Wishlist__cta__btn'>Remove All from Wishlist</button>
                    <button className='Wishlist__cta__btn'>Move All to Cart</button>
                </div>
            </div>
            <div className="items">
                {
                    wishlist && wishlist.map((item, index) => (
                        
                        <div key={index} className="items__card">
                            <img src={`./product-imgs/${item.product.image1}`} alt="..." />
                            <h1>{item.product.name}</h1>
                            <p> Quantity: <strong>{item.quantity}</strong></p>
                            <p>{item.product.price} $</p>
                            <button className='items__card__Add'
                                onClick={() => {
                                    dispatch(addToCart({product: item.product, quantity: item.quantity}));
                                    dispatch(removeFromWishlist(item.product.id))
                                    navigate('/Cart')
                                }}
                            >ADD TO CART</button>
                            <button className='items__card__remove'
                                onClick={() => {
                                    dispatch(removeFromWishlist(item.product.id))
                                }}
                            >REMOVE FROM CART</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Wishlist