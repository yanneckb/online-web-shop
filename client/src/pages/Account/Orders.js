import React, { useEffect, useState } from 'react';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';

const Orders = () => {
  const [order, setOrder] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(async () => {
    const orders = await userReq.get(`orders/find/${user._id}`);
    setOrder(orders.data);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Styled.OrderContainer>
      {order.length === 0 ? (
        <p>Du hast noch keine Bestellungen</p>
      ) : (
        <div>
          <Styled.Caption>Meine Bestellungen</Styled.Caption>

          <Styled.Orders>
            <p>
              <b>Adresse:</b> {order[orderNr].address}
            </p>

            <p>
              <b>Bestellt am: </b>
              {`${new Date(order[orderNr].createdAt).getDate()} - ${
                new Date(order[orderNr].createdAt).getMonth() + 1
              } - ${new Date(order[orderNr].createdAt).getFullYear()}`}
            </p>
            <p>
              <b>Status:</b> {order[orderNr].status}
            </p>
            <p>
              <b>Anzahl: </b>
              {order[orderNr].products.length} Produkt(e)
            </p>
          </Styled.Orders>
          <button onClick={() => handleChange('next')}>NEXT ORDER</button>
          <button onClick={() => handleChange('prev')}>previous ORDER</button>
          {/* {order.map((o) => (
            <Styled.Orders>
              <p>
                <b>Adresse:</b> {o.address}
              </p>

              <p>
                <b>Bestellt am: </b>
                {`${new Date(o.createdAt).getDate()} - ${
                  new Date(o.createdAt).getMonth() + 1
                } - ${new Date(o.createdAt).getFullYear()}`}
              </p>
              <p>
                <b>Status:</b> {o.status}
              </p>
              <p>
                <b>Anzahl: </b>
                {o.products.length} Produkt(e)
              </p>
            </Styled.Orders>
          ))} */}
        </div>
      )}
    </Styled.OrderContainer>
  );
};

export default Orders;
