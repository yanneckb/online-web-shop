import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors } from './redux/user.redux';
import { clearCart, getCart } from './redux/cart.redux';
import { logout } from './redux/apiCalls.redux';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './helpers/scrollToTop';
import Account from './pages/Account';
import Orders from './pages/Account/Orders';
import User from './pages/Account/User';
import jwt from 'jsonwebtoken';
import HomeAccount from './pages/Account/HomeAccount';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser) || false;
  const cart = useSelector((state) => state.cart.cartData) || false;

  // CLEARS LOGIN/REGISTER ERRORS AND LOGOUT IF TOKEN EXPIRED
  useEffect(() => {
    LogoutAndReload();
  }, []);

  const LogoutAndReload = async () => {
    dispatch(clearErrors());
    if (user) {
      const jwtDate = jwt.decode(user.accessToken).exp * 1000;
      const currentDate = Date.now();
      if (currentDate > jwtDate) {
        await logout(dispatch);
      }
    }
  };

  // GET CART DATA
  useEffect(() => {
    if (user) {
      dispatch(getCart(user.user._id));
    }
  }, []);

  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Announcement />
        <div style={{ backgroundColor: '#F6F6F6' }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/products/:category' element={<ProductList />} />
            <Route
              path='/register'
              element={user ? <Navigate to='/' /> : <Register />}
            />
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/cart'
              element={!user ? <Navigate to='/login' /> : <Cart />}
            />
            <Route
              path='/account'
              element={!user ? <Navigate to='/login' /> : <Account />}
            >
              <Route path='/account/orders' element={<Orders />} />
              <Route path='/account/user' element={<User />} />
              <Route path='/account/' element={<HomeAccount />} />
            </Route>
            <Route path='/success' element={<Success />} />
            // NO MATCH ROUTE!
            <Route
              path='*'
              element={
                <div
                  style={{
                    padding: '1rem',
                    minHeight: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <h2 style={{ marginBottom: '1.5rem' }}>
                    Bitte gehen Sie weiter, hier gibt es nichts zu sehen!
                  </h2>
                  <img src='https://media.giphy.com/media/12Zv57OF16CQg/giphy.gif' />
                </div>
              }
            />
          </Routes>
        </div>
        <Newsletter />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default App;
