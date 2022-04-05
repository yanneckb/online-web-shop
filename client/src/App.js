import React, { useEffect, useContext, useRef, usePrevious } from 'react';
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
    async () => {
      dispatch(clearErrors());
      if (user) {
        const jwtDate = jwt.decode(user.accessToken).exp * 1000;
        const currentDate = Date.now();
        if (currentDate > jwtDate) {
          //LogoutAndReload();
          await logout(dispatch);
          window.location.reload();
        }
      }
    };
  }, []);

  // REFRESH PAGE ON ROUTE CHANGE
  const location = useLocation();
  const prevLocation = usePrevious(location);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const useLocationChange = (action) => {
    useEffect(() => {
      action(location, prevLocation);
    }, [location]);
  };

  useEffect(() => {
    if (location !== prevLocation) {
      window.location.reload();
    }
  }, [location]);

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
            // NO MATCH ROUTE! OTHER ROUTES ABOVE
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
