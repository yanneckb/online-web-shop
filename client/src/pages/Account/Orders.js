import React, { useEffect, useState } from 'react';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';
import Loader from '../../components/Loader';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [orderNr, setOrderNr] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const user =
    useSelector((state) => state.user.currentUser.savedUser) ||
    useSelector((state) => state.user.currentUser.user);

  // GET ALL USER ORDERS
  useEffect(async () => {
    const orders = await userReq.get(`orders/find/${user._id}`);
    setOrder(orders.data);
    setIsLoading(false);
  }, []);

  // NAVIGATE THROUGH ORDERS
  const handleChange = (action) => {
    if (action === 'next' && orderNr < order.length - 1) {
      setOrderNr(orderNr + 1);
    }
    if (action === 'prev' && orderNr > 0) {
      setOrderNr(orderNr - 1);
    } else return;
  };

  return (
    <Styled.OrderContainer>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '20vh',
          }}
        >
          <Loader />
        </div>
      ) : order.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100%',
          }}
        >
          <Styled.Title>Du hast noch keine Bestellungen... ☹️</Styled.Title>
        </div>
      ) : (
        <Styled.OrderBox>
          <Styled.Caption>Meine Bestellungen</Styled.Caption>

          <Styled.Orders>
            <Styled.OrderText>
              <b>Adresse:</b> {order[orderNr].address}
            </Styled.OrderText>

            <Styled.OrderText>
              <b>Bestellt am: </b>
              {`${new Date(order[orderNr].createdAt).getDate()}. ${
                new Date(order[orderNr].createdAt).getMonth() + 1
              }. ${new Date(order[orderNr].createdAt).getFullYear()}`}
            </Styled.OrderText>
            <Styled.OrderText>
              <b>Status:</b> {order[orderNr].status}
            </Styled.OrderText>
            <Styled.OrderText>
              <b>Anzahl: </b>
              {order[orderNr].products.length} Produkt(e)
            </Styled.OrderText>
            <Styled.OrderText>
              <b>Summe: </b>
              {order[orderNr].amount} €
            </Styled.OrderText>
          </Styled.Orders>
          <Styled.OrderNav>
            <Styled.OrderBtn onClick={() => handleChange('prev')}>
              <ArrowBackIosNewIcon />
            </Styled.OrderBtn>
            <p>
              Bestellung {orderNr + 1} von {order.length}
            </p>
            <Styled.OrderBtn onClick={() => handleChange('next')}>
              <ArrowForwardIosIcon />
            </Styled.OrderBtn>
          </Styled.OrderNav>
        </Styled.OrderBox>
      )}
    </Styled.OrderContainer>
  );
};

export default Orders;
