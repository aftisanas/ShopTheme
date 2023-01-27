import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './scss/products.css';
import { Link } from 'react-router-dom';

const Products = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const allProducts = useSelector(state => state.data.products);
    const [value, setValue] = useState('all');
    
    const newArrivals = allProducts.filter(item => item.category === 'newArrivals');
    const bestSellers = allProducts.filter(item => item.category === 'bestSellers');
    const topRated = allProducts.filter(item => item.category === 'topRated');

    return (
        <div className='cards-container' id='products'>
            <div className="cards-container__header">
                <h1 className="cards-container__header__title">
                    Casual Shoes
                </h1>
                <ul>
                    <li className={`${value === 'all' ? 'active' : 'null'}`} onClick={() => {
                        setValue(prev => prev = 'all')
                        }}>ALL</li>

                    <li className={`${value === 'newArrivals' ? 'active' : 'null'}`} onClick={() => {
                        setValue(prev => prev = 'newArrivals')
                        }}>NEW ARRIVALS</li>

                    <li className={`${value === 'bestSellers' ? 'active' : 'null'}`} onClick={() => {
                        setValue(prev => prev = 'bestSellers')
                        }}>BEST SELLERS</li>

                    <li className={`${value === 'topRated' ? 'active' : 'null'}`} onClick={() => {
                        setValue(prev => prev = 'topRated')
                        }}>TOP RATED</li>
                </ul>
            </div>
                {value === 'all' && (
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        customTransition="all 0.5s"
                        transitionDuration={500}
                    >
                        {allProducts.map((item, index) => (
                            <div key={index} className='cards-container__card'>
                                <img src={`./product-imgs/${item.image1}`} alt="..." />
                                <div className="cards-container__card__info">
                                    <div>
                                        <h1>{item.name}</h1>
                                        <Link 
                                            to={`/ProductDetail/${item.id}`} 
                                            style = {{ 
                                                textDecoration: 'none',
                                                color: '#a3a3a3',
                                                fontFamily: 'Cairo, sans-serif',
                                                fontSize: '1rem'
                                            }}
                                        >View Details</Link>
                                    </div>
                                    <p>{item.price} $</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
                {value === 'newArrivals' && (
                    <Carousel
                    responsive={responsive}
                    swipeable={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    >
                        {newArrivals.map((item, index) => (
                            <div key={index} className='cards-container__card'>
                                <img src={`./product-imgs/${item.image1}`} alt="..." />
                                <div className="cards-container__card__info">
                                    <div>
                                        <h1>{item.name}</h1>
                                        <Link 
                                            to={`/ProductDetail/${item.id}`} 
                                            style = {{ 
                                                textDecoration: 'none',
                                                color: '#a3a3a3',
                                                fontFamily: 'Cairo, sans-serif',
                                                fontSize: '1rem'
                                            }}
                                        >View Details</Link>
                                    </div>
                                    <p>{item.price} $</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
                {value === 'bestSellers' && (
                    <Carousel
                    responsive={responsive}
                    swipeable={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    >
                        {bestSellers.map((item, index) => (
                            <div key={index} className='cards-container__card'>
                                <img src={`./product-imgs/${item.image1}`} alt="..." />
                                <div className="cards-container__card__info">
                                    <div>
                                        <h1>{item.name}</h1>
                                        <Link 
                                            to={`/ProductDetail/${item.id}`} 
                                            style = {{ 
                                                textDecoration: 'none',
                                                color: '#a3a3a3',
                                                fontFamily: 'Cairo, sans-serif',
                                                fontSize: '1rem'
                                            }}
                                        >View Details</Link>
                                    </div>
                                    <p>{item.price} $</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
                {value === 'topRated' && (
                    <Carousel
                    responsive={responsive}
                    swipeable={true}
                    customTransition="all 0.5s"
                    transitionDuration={500}
                    >
                        {topRated.map((item, index) => (
                            <div key={index} className='cards-container__card'>
                                <img src={`./product-imgs/${item.image1}`} alt="..." />
                                <div className="cards-container__card__info">
                                    <div>
                                        <h1>{item.name}</h1>
                                        <Link 
                                            to={`/ProductDetail/${item.id}`} 
                                            style = {{ 
                                                textDecoration: 'none',
                                                color: '#a3a3a3',
                                                fontFamily: 'Cairo, sans-serif',
                                                fontSize: '1rem'
                                            }}
                                        >View Details</Link>
                                    </div>
                                    <p>{item.price} $</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
        </div>
    )
}

export default Products;