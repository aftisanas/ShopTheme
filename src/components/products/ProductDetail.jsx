import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWishlist, decrease, increase } from '../../store/dataSlice';
import './scss/products.css';
const ProductDetail = () => {
    const { id } = useParams();
    // SELECTORS
    const allProducts = useSelector(state => state.data.products);
    const counter = useSelector(state => state.data.counter);
    // DISPATCH
    const dispatch = useDispatch();
    // NAVIGATE
    const navigate = useNavigate();

    const product = allProducts.find(item => item.id === Number(id));
    console.log("🚀 ~ file: ProductDetail.jsx:9 ~ ProductDetail ~ product", product);
    
    // SIZES
    const sizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15];

    return (
        <div className='container'>
            <div className="container__img">
                <img src={`../product-imgs/${product.image1}`} alt="..." />
                <img src={`../product-imgs/${product.image2}`} alt="..." />
                <img src={`../product-imgs/${product.image3}`} alt="..." />
            </div>
            <div className="container__infos">
                <h1 className='container__infos__title'>{product.name}</h1>
                <p className='container__infos__txt'>Casual Shoes</p>
                <p className='container__infos__price'>$ {product.price}</p>
                <hr />
                <p className='container__infos__specialMsg'>
                    Unisex style. Product runs in men’s sizes only.
                    Women should order 1.5 sizes down from their usual size.
                </p>
                <hr />
                <div className="container__infos__size">
                    <h1>Size</h1>
                    {sizes.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <div className="container__infos__cta">
                    <div className="container__infos__cta__counter">
                        <button
                            onClick={() => dispatch(decrease())}
                        >
                            <ion-icon name="remove-outline"></ion-icon>
                        </button>
                        <p>{counter}</p>
                        <button
                            onClick={() => dispatch(increase())}
                        >
                            <ion-icon name="add-outline"></ion-icon>
                        </button>
                    </div>
                    <button className="container__infos__cta__addToCart"
                        onClick={() => {
                            dispatch(addToCart({product: product, quantity: counter}))
                            navigate('/Cart')
                        }}
                    >
                        ADD TO CART
                    </button>
                    <button className="container__infos__cta__addToWS"
                        onClick={() => {
                            dispatch(addToWishlist({product: product, quantity: counter}))
                            navigate('/Wishlist')
                        }}
                    >
                        <ion-icon name="heart-outline"></ion-icon>
                        ADD TO WISHLIST
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;