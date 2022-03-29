import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';
import Sidebar from './Sidebar';

const Account = () => {
  const [order, setOrder] = useState([]);
  const [orderNr, setOrderNr] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user.currentUser);

  // console.log('ORDER: ', order);

  useEffect(async () => {
    const orders = await userReq.get(`orders/find/${user._id}`);
    setOrder(orders.data);
    setIsLoading(false);
    console.log(orders.data);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  // ORDER NUMMER DARF NICHT GRÖSSER ALS ARRAY LÄNGE SEIN
  //
  const handleChange = (action) => {
    if (action === 'next' && orderNr + 1 < order.length) {
      setOrderNr(orderNr + 1);
      console.log('ORDER LENGTH: ', order.length);
      console.log('ORDER NR: ', orderNr);
      console.log('ORER: ', order[orderNr]);
    }
    if (action === 'prev' && order.length <= orderNr - 1) {
      setOrderNr(orderNr - 1);
      console.log('ORDER LENGTH: ', order.length);
      console.log('ORDER NR: ', orderNr);
    } else return;
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Styled.Wrapper>
        <Sidebar />
        <Styled.Container>
          <Styled.Title>Hallo, {user.firstName}!</Styled.Title>
          <hr />
          <Outlet />
        </Styled.Container>
      </Styled.Wrapper>
    );
  }
};

export default Account;
