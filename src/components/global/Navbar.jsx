import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  // NAVIGATE
  const navigate = useNavigate();
  // SELECTORS
  const cart = useSelector(state => state.data.cart);
  const wishlist = useSelector(state => state.data.wishlist);
  return (
    <div>
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li><Link to='#products'>Sneakers</Link></li>
          <li><Link to='/'>Shirts</Link></li>
          <li><Link to='/'>Shorts</Link></li>
        </ul>
        <h3 className='nav-title' onClick={() => navigate('/')} >SHOP & THEME</h3>
        <ul className='nav-list'>
          <li>
            <Link to='/'>
              <ion-icon name="search-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to='/Wishlist' className={`${ wishlist && wishlist.length > 0 ? 'element' : null}`}>
              <ion-icon name="heart-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to='/Cart' className={`${ cart && cart.length > 0 ? 'element' : null}`}>
              <ion-icon name="bag-outline"></ion-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;