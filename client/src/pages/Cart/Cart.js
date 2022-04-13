import { useState, useEffect } from 'react';
import { Add, Delete, Remove } from '@material-ui/icons';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateCart, getCart } from '../../redux/cart.redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userReq } from '../../helpers/requestMethods';
import Loader from '../../components/Loader';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartData);
  const userId = useSelector((state) => state.user.currentUser.user._id);
  const user = useSelector((state) => state.user.currentUser.user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [{ isPending }] = usePayPalScriptReducer();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pushProducts = async () => {
    const productArray = [];
    for (let i = 0; i < cart.products.length; i++) {
      const res = await userReq.get(
        `/products/find/${cart.products[i].productId}`
      );
      productArray.push({
        ...cart.products[i],
        img: res.data.img,
        price: res.data.price,
        title: res.data.title,
      });
    }
    setProducts([...productArray]);
    setIsLoading(false);
  };

  // HANDLES QTY CHANGE OR PRODUCT REMOVE
  const handleChange = (target, type) => {
    setIsDisabled(true);
    const index = cart.products.findIndex((item) => {
      return item._id === target._id;
    });
    dispatch(updateCart({ userId, index, product: target, type }));
  };

  // ON PAGE LOAD GET CART FROM DB AND PUSH INTO PRODUCTS ARRAY
  useEffect(() => {
    if (cart.products.length > 0) {
      dispatch(getCart(userId));
      pushProducts();
    } else {
      setIsLoading(false);
    }
  }, []);
  console.log(products);
  return (
    <Styled.Container>
      {isPending ? (
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
      ) : (
        <Styled.Wrapper>
          <Styled.Title>Dein Warenkorb:</Styled.Title>
          <Styled.Top>
            <Styled.TopButton onClick={() => navigate('/')}>
              Nochmal umsehen
            </Styled.TopButton>
          </Styled.Top>
          <Styled.Bottom>
            <Styled.Items>
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
              ) : products.length === 0 ? (
                <p>Dein Warenkorb ist leer...</p>
              ) : (
                <div>
                  {products.map((product) => (
                    <Styled.Product key={product.productId}>
                      <Styled.ProductDetail>
                        <Styled.ProductLink
                          to={`/product/${product.productId}`}
                        >
                          <Styled.Image src={product.img} />
                        </Styled.ProductLink>
                        <Styled.Details>
                          <Styled.ProductLink
                            to={`/product/${product.productId}`}
                          >
                            <Styled.ProductName>
                              <b>{product.title}</b>
                            </Styled.ProductName>
                          </Styled.ProductLink>
                          <Styled.ProductColorContainer>
                            Farbe: <Styled.ProductColor color={product.color} />
                          </Styled.ProductColorContainer>
                          <Styled.ProductSize>
                            Größe: {product.size}
                          </Styled.ProductSize>
                        </Styled.Details>
                      </Styled.ProductDetail>
                      <Styled.InfoContainer>
                        <p>
                          {product.qty} x {product.price}€
                        </p>
                        <Styled.Amount>
                          <Styled.AmountButton
                            onClick={() => handleChange(product, 'acs')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? 'disabled' : '' }}
                          >
                            <Add />
                          </Styled.AmountButton>
                          <Styled.AmountButton
                            onClick={() => handleChange(product, 'decs')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? 'disabled' : '' }}
                          >
                            <Remove />
                          </Styled.AmountButton>
                          <Styled.AmountButton
                            onClick={() => handleChange(product, 'remove')}
                            disabled={isDisabled}
                            style={{ cursor: isDisabled ? 'disabled' : '' }}
                          >
                            <Delete />
                          </Styled.AmountButton>
                        </Styled.Amount>

                        <h3>{product.price * product.qty}€</h3>
                      </Styled.InfoContainer>
                    </Styled.Product>
                  ))}
                  <Styled.TopButton
                    style={{ marginTop: '1rem', marginBottom: '2rem' }}
                    onClick={() => dispatch(clearCart(userId))}
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
                  {user.address ? (
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: cart.total,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then(async (details) => {
                          try {
                            const res = await userReq.post('/orders/', {
                              userId,
                              products: cart.products,
                              amount: cart.total,
                              address: user.address,
                            });
                            navigate('/success');
                            dispatch(clearCart(userId));
                          } catch {}
                        });
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <p>Bitte füge eine Adresse in deinem Konto hinzu!</p>
                      <Styled.TopButton
                        style={{ margin: '0.75rem 0' }}
                        onClick={() => navigate('/account/user')}
                      >
                        Adresse hinzufügen
                      </Styled.TopButton>
                    </div>
                  )}
                </Styled.BottomInfo>
              </Styled.TotalCart>
              <Styled.ShoppingInfo></Styled.ShoppingInfo>
            </Styled.Sidebar>
          </Styled.Bottom>
        </Styled.Wrapper>
      )}
    </Styled.Container>
  );
};

export default Cart;
