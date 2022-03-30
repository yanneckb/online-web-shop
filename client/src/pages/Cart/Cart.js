import { useState, useEffect } from 'react';
import { Add, Delete, Remove } from '@material-ui/icons';
import * as Styled from './styles';
import { paymentMethod } from '../../helpers/paymentMethodSVGs';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateCart, getCart } from '../../redux/cart.redux';
import StripeCheckout from 'react-stripe-checkout';
import { userReq } from '../../helpers/requestMethods';
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const { qty, total } = useSelector((state) => state);
  const cart = useSelector((state) => state.cart.cartData);
  const userId = useSelector((state) => state.user.currentUser.user._id);
  const state = useSelector((state) => state);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleQty = (target, type) => {
    const index = cart.products.findIndex((item) => {
      return item._id === target._id;
    });
    dispatch(updateCart({ index, product: target, type }));
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userReq.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success');
        dispatch(clearCart(userId));
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeReq();
  }, [stripeToken, cart.total, navigate]);

  useEffect(() => {
    dispatch(getCart(userId));
    console.log(userId);
  }, []);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>Dein Warenkorb:</Styled.Title>
        <Styled.Top>
          <Styled.TopButton onClick={() => navigate('/')}>
            Nochmal umsehen
          </Styled.TopButton>
          {/* <Styled.TopTexts>
            <Styled.TopText>Shopping Bag(2)</Styled.TopText>
            <Styled.TopText>Your Wishlist (0)</Styled.TopText>
          </Styled.TopTexts> */}
        </Styled.Top>
        <Styled.Bottom>
          <Styled.Items>
            {cart.products.length === 0 ? (
              <p>Dein Warenkorb ist leer...</p>
            ) : (
              <div>
                {cart.products.map((product) => (
                  <Styled.Product key={product._id}>
                    <Styled.ProductDetail>
                      <Styled.Image src={product.img} />
                      <Styled.Details>
                        <Styled.ProductName>
                          <b>{product.title}</b>
                        </Styled.ProductName>
                        <Styled.ProductColor color={product.color} />
                        <Styled.ProductSize>
                          Size: {product.size}
                        </Styled.ProductSize>
                      </Styled.Details>
                    </Styled.ProductDetail>
                    <Styled.InfoContainer>
                      <p>
                        {product.qty} x {product.price}€
                      </p>
                      <Styled.Amount>
                        <Styled.AmountButton
                          onClick={() => handleQty(product, 'acs')}
                        >
                          <Add />
                        </Styled.AmountButton>
                        <Styled.AmountButton
                          onClick={() => handleQty(product, 'decs')}
                        >
                          <Remove />
                        </Styled.AmountButton>
                        <Styled.AmountButton
                          onClick={() => handleQty(product, 'remove')}
                        >
                          <Delete />
                        </Styled.AmountButton>
                      </Styled.Amount>
                      <h3>= {product.price * product.qty}€</h3>
                    </Styled.InfoContainer>
                  </Styled.Product>
                ))}
                <Styled.TopButton
                  style={{ marginTop: '1rem', marginBottom: '2rem' }}
                  onClick={() => dispatch(clearCart())}
                >
                  Warenkorb leeren
                </Styled.TopButton>
              </div>
            )}
          </Styled.Items>
          <Styled.Sidebar>
            <Styled.TotalCart>
              <Styled.TotalTitle>Warenkorb Übersicht</Styled.TotalTitle>
              <Styled.TopInfo>
                <Styled.Shipping>
                  <Styled.ShippingText>Versandkosten</Styled.ShippingText>
                  <Styled.ShippingText>0.00€</Styled.ShippingText>
                </Styled.Shipping>
                <Styled.Total>
                  <Styled.TotalText>Gesamtbetrag</Styled.TotalText>
                  <Styled.TotalText>{cart.total}€</Styled.TotalText>
                </Styled.Total>
              </Styled.TopInfo>
              <Styled.BottomInfo>
                <StripeCheckout
                  name='shoop-dev-oop'
                  image='#'
                  billingAddress
                  shippingAddress
                  description={`Der Gesamtwert beträgt ${cart.total}€`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <Styled.BuyButton>Bestellung abschließen</Styled.BuyButton>
                </StripeCheckout>
              </Styled.BottomInfo>
              <Styled.PaymentContainer>
                <p>Unsere Zahlungsmethoden</p>
                <Styled.PaymentMethods>
                  <Styled.PaymentSvg src={paymentMethod('amazon', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('applepay', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('paypal', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('amex', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('giropay', 'light')} />
                  <Styled.PaymentSvg
                    src={paymentMethod('googlewallet', 'light')}
                  />
                  <Styled.PaymentSvg src={paymentMethod('klarna', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('maestro', 'light')} />
                  <Styled.PaymentSvg
                    src={paymentMethod('mastercard', 'light')}
                  />
                  <Styled.PaymentSvg src={paymentMethod('visa', 'light')} />
                  <Styled.PaymentSvg src={paymentMethod('sepa', 'light')} />
                </Styled.PaymentMethods>
              </Styled.PaymentContainer>
            </Styled.TotalCart>
            <Styled.ShoppingInfo></Styled.ShoppingInfo>
          </Styled.Sidebar>
        </Styled.Bottom>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Cart;

// import { Add, Remove } from '@material-ui/icons';
// import * as Styled from './styles';

// const Cart = () => {
//   return (
//     <Styled.Container>
//       <Styled.Wrapper>
//         <Styled.Title>Dein Warenkorb</Styled.Title>
//         <Styled.Top>
//           <Styled.TopButton>Nochmal umsehen</Styled.TopButton>
//           {/* <Styled.TopTexts>
//             <Styled.TopText>Shopping Bag(2)</Styled.TopText>
//             <Styled.TopText>Your Wishlist (0)</Styled.TopText>
//           </Styled.TopTexts> */}
//         </Styled.Top>
//         <Styled.Bottom>
//           <Styled.Info>
//             <Styled.Product>
//               <Styled.ProductDetail>
//                 <Styled.Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
//                 <Styled.Details>
//                   <Styled.ProductName>
//                     <b>Product:</b> JESSIE THUNDER SHOES
//                   </Styled.ProductName>
//                   <Styled.ProductId>
//                     <b>ID:</b> 93813718293
//                   </Styled.ProductId>
//                   <Styled.ProductColor color='black' />
//                   <Styled.ProductSize>
//                     <b>Size:</b> 37.5
//                   </Styled.ProductSize>
//                 </Styled.Details>
//               </Styled.ProductDetail>
//               <Styled.PriceDetail>
//                 <Styled.ProductAmountContainer>
//                   <Add />
//                   <Styled.ProductAmount>2</Styled.ProductAmount>
//                   <Remove />
//                 </Styled.ProductAmountContainer>
//                 <Styled.ProductPrice>$ 30</Styled.ProductPrice>
//               </Styled.PriceDetail>
//             </Styled.Product>
//             <Styled.Hr />
//             <Styled.Product>
//               <Styled.ProductDetail>
//                 <Styled.Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
//                 <Styled.Details>
//                   <Styled.ProductName>
//                     <b>Product:</b> HAKURA T-SHIRT
//                   </Styled.ProductName>
//                   <Styled.ProductId>
//                     <b>ID:</b> 93813718293
//                   </Styled.ProductId>
//                   <Styled.ProductColor color='gray' />
//                   <Styled.ProductSize>
//                     <b>Size:</b> M
//                   </Styled.ProductSize>
//                 </Styled.Details>
//               </Styled.ProductDetail>
//               <Styled.PriceDetail>
//                 <Styled.ProductAmountContainer>
//                   <Add />
//                   <Styled.ProductAmount>1</Styled.ProductAmount>
//                   <Remove />
//                 </Styled.ProductAmountContainer>
//                 <Styled.ProductPrice>$ 20</Styled.ProductPrice>
//               </Styled.PriceDetail>
//             </Styled.Product>
//           </Styled.Info>
//           <Styled.Summary>
//             <Styled.SummaryTitle>ORDER SUMMARY</Styled.SummaryTitle>
//             <Styled.SummaryItem>
//               <Styled.SummaryItemText>Subtotal</Styled.SummaryItemText>
//               <Styled.SummaryItemPrice>$ 80</Styled.SummaryItemPrice>
//             </Styled.SummaryItem>
//             <Styled.SummaryItem>
//               <Styled.SummaryItemText>
//                 Estimated Shipping
//               </Styled.SummaryItemText>
//               <Styled.SummaryItemPrice>$ 5.90</Styled.SummaryItemPrice>
//             </Styled.SummaryItem>
//             <Styled.SummaryItem>
//               <Styled.SummaryItemText>Shipping Discount</Styled.SummaryItemText>
//               <Styled.SummaryItemPrice>$ -5.90</Styled.SummaryItemPrice>
//             </Styled.SummaryItem>
//             <Styled.SummaryItem type='total'>
//               <Styled.SummaryItemText>Total</Styled.SummaryItemText>
//               <Styled.SummaryItemPrice>$ 80</Styled.SummaryItemPrice>
//             </Styled.SummaryItem>
//             <Styled.Button>CHECKOUT NOW</Styled.Button>
//           </Styled.Summary>
//         </Styled.Bottom>
//       </Styled.Wrapper>
//     </Styled.Container>
//   );
// };

// export default Cart;
