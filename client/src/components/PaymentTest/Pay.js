import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const STRIPE_KEY =
  'pk_test_51KdbZxIAluFNxxf5IOBdnhefWyVmb4iXXqZUEAtMK0t1IVtS4KufMWNEw8ng9efYbRHUndHz8GoCSMUVopeByzoG00bl7Y1dnK';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await axios.post(
          'http://localhost:8080/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeReq();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {stripeToken ? (
        <span>Bezahlvorgang läuft! Bitte warten...</span>
      ) : (
        <StripeCheckout
          name='shoop-dev-oop'
          image='#'
          billingAddress
          shippingAddress
          description='Der Gesamtwert beträgt 20,00€'
          amount={2000}
          token={onToken}
          stripeKey={STRIPE_KEY}
        />
      )}
    </div>
  );
};

export default Pay;
