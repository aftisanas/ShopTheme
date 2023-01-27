import './scss/App.css';
import Home from './components/home/Home';
import Announcement from './components/global/Announcement';
import Navbar from './components/global/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import products from './products.json';
import { setProducts } from './store/dataSlice';
import ProductDetail from './components/products/ProductDetail';
import Cart from './components/checkout/Cart';
import Wishlist from './components/checkout/Wishlist';
import Footer from './components/global/Footer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  // DISPATCH
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setProducts(products))
  }, [dispatch]);

  return (
    // react-paypal-js includes the PayPalScriptProvider that acts as a context provider for managing 
    // states. It is suggested to add it to the root of the React app so i imported
    <PayPalScriptProvider
      options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <Announcement />
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='ProductDetail/:id' element={<ProductDetail />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='Wishlist' element={<Wishlist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
