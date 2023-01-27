import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/dataSlice';
import Checkout from './paypal/Checkout ';
import './scss/checkout.css';

const Cart = () => {
    // SELECTORS
    const cart = useSelector(state => state.data.cart);
    console.log("🚀 ~ file: Cart.jsx:7 ~ Cart ~ cart", cart);
    // DISPATCH
    const dispatch = useDispatch();

    const total = () => { 
        let sub = 0;
        cart && cart.map(item => sub += (Number(item.product.price) * Number(item.quantity)))
        return sub;
    }
    total();
    return (
        <div>
            <div className='cart'>
                <table className="cart__table">
                    <caption>Product Cart</caption>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={`./product-imgs/${item.product.image1}`} alt="..." />
                                </td>
                                <td className='cart__table__bold'>{item.product.name}</td>
                                <td className='cart__table__bold'>{item.product.price} $</td>
                                <td>{item.quantity}</td>
                                <td className='cart__table__bold'>{item.quantity * item.product.price} $</td>
                                <td>
                                    <button className='cart__table__delete'
                                        onClick={() => dispatch(removeFromCart(item.product.id))}
                                    >DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="cart__total">
                <h1 className="cart__total__title">Cart Totals</h1>
                <div className="cart__total__sub">
                    <div className='cart__total__sub__item'>
                        <p className='total'>Sub total</p>
                        <p className='total'>{total()} $</p>
                    </div>
                    <div className='cart__total__sub__item'>
                        <p className='total'>Total</p>
                        <p className='total'>{total()} $</p>
                    </div>
                </div>
                {/* CHECKOUT */}
                <Checkout total={total()} />
            </div>
        </div>
    )
}

export default Cart