import React from 'react';
import './scss/home.css'
import Hero from './Hero';
import Popular from './Popular';
import Products from '../products/Products';
import Banner from './Banner';
import Email from './Email';
const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Products />
            <Banner />
            <Email />
        </div>
    )
}

export default Home;