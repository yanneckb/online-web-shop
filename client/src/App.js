import React, { useEffect, useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors } from './redux/user.redux';
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
import Pay from './components/PaymentTest/Pay';
import ScrollToTop from './helpers/scrollToTop';
import Account from './pages/Account';
import Orders from './pages/Account/Orders';
import jwt from 'jsonwebtoken';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser) || false;

  // CLEARS LOGIN/REGISTER ERRORS AND LOGOUT IF TOKEN EXPIRED
  useEffect(() => {
    dispatch(clearErrors());
    if (user) {
      const jwtDate = jwt.decode(user.accessToken).exp * 1000;
      const currentDate = Date.now();
      if (currentDate > jwtDate) {
        LogoutAndReload();
      }
    }
  }, []);

  const LogoutAndReload = async () => {
    await logout(dispatch);
    window.location.reload();
  };

  // REFRESH PAGE ON ROUTE CHANGE
  // let appInfo = useContext(AppInfoContext);
  // let location = useLocation();
  // useEffect(() => {
  //   window.location.reload();
  // }, [location.pathname]);

  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Announcement />
        <div style={{ backgroundColor: '#F6F6F6' }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product/:id' element={<Product />} />
            <Route exact path='/products/:category' element={<ProductList />} />
            <Route
              exact
              path='/register'
              element={user ? <Navigate to='/' /> : <Register />}
            />
            <Route
              exact
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              exact
              path='/cart'
              element={!user ? <Navigate to='/login' /> : <Cart />}
            />
            <Route
              exact
              path='/account'
              element={!user ? <Navigate to='/login' /> : <Account />}
            >
              <Route path='/account/orders' element={<Orders />} />
            </Route>
            <Route exact path='/pay' element={<Pay />} />
            <Route exact path='/success' element={<Success />} />
          </Routes>
        </div>
        <Newsletter />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default App;
