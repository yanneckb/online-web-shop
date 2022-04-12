import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { publicReq } from '../../helpers/requestMethods';
import { Add, Remove } from '@material-ui/icons';
// import { addProduct, increaseProduct } from '../../redux/cart.redux';
import { addToCart, updateCart } from '../../redux/cart.redux';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser) || false;
  const userId = user.user?._id;
  const cart = useSelector((state) => state.cart.cartData);
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  const [valid, setValid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  // GET PRODUCT
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`/products/find/${id}`);
        setProduct(res.data);
        setIsLoading(false);
      } catch {}
    };
    getProduct();
  }, [id]);

  // HANDLE QUANTITY FOR ADD TO CART
  const handleQty = (type) => {
    if (type === 'dec') {
      qty > 1 && setQty(qty - 1);
    }
    if (type === 'acs') {
      qty < 99 && setQty(qty + 1);
    }
  };

  // ADD ITEM TO CART
  const handleClick = () => {
    if (user) {
      if (color === '' && size === '') {
        setValid(false);
        alert('Bitte Wähle eine Größe und eine Farbe!');
      } else {
        setIsDisabled(true);
        setValid(true);
        const index = cart.products.findIndex((item) => {
          return item._id === product._id;
        });
        if (
          cart.products[index]?._id === product._id &&
          cart.products[index]?.color === color &&
          cart.products[index]?.size === size
        ) {
          dispatch(updateCart({ index, product, type: 'acs' }));
          navigate('/cart');
        } else {
          dispatch(
            addToCart({
              ...product,
              qty,
              color,
              size,
              productId: id,
              userId,
              price: product.price,
            })
          );
          navigate('/cart');
        }
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <Styled.Container>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '40vh',
          }}
        >
          <Loader />
        </div>
      ) : (
        <Styled.Wrapper>
          <Styled.ImgContainer>
            <Styled.Image src={product.img} />
          </Styled.ImgContainer>
          <Styled.InfoContainer>
            <Styled.CategoryContainer>
              <Styled.Category>
                {product.categories?.map((cat) => cat + ' ')}
              </Styled.Category>
            </Styled.CategoryContainer>
            <Styled.Title>{product.title}</Styled.Title>
            <Styled.Desc>{product.description}</Styled.Desc>
            <Styled.FilterContainer>
              <Styled.Filter>
                <Styled.FilterTitle>Variante: </Styled.FilterTitle>
                {product.color?.map((color) => (
                  <Styled.FilterColor
                    color={color}
                    key={color}
                    onClick={() => setColor(color)}
                    style={{
                      border: valid === false ? ' 1px solid #953b43' : 'none',
                    }}
                  ></Styled.FilterColor>
                ))}
              </Styled.Filter>
              <Styled.Filter>
                <Styled.FilterTitle>Größe: </Styled.FilterTitle>
                <Styled.FilterSize
                  onChange={(e) => setSize(e.target.value)}
                  style={{
                    border: valid === false ? ' 1px solid #953b43' : '',
                    color: valid === false ? '#953b43' : '',
                    backgroundColor: valid === false ? '#f8d7da' : '',
                  }}
                >
                  <Styled.FilterSizeOption key='sizeFiller'>
                    Größe wählen
                  </Styled.FilterSizeOption>
                  {product.size?.map((size) => (
                    <Styled.FilterSizeOption key={size}>
                      {size}
                    </Styled.FilterSizeOption>
                  ))}
                </Styled.FilterSize>
              </Styled.Filter>
              <Styled.AmountContainer>
                <Remove onClick={() => handleQty('dec')} />
                <Styled.Amount>{qty}</Styled.Amount>
                <Add onClick={() => handleQty('acs')} />
              </Styled.AmountContainer>
            </Styled.FilterContainer>
            <Styled.AddContainer>
              <Styled.BuySection>
                <Styled.Price>{product.price}€</Styled.Price>
                <Styled.Button
                  onClick={handleClick}
                  disabled={isDisabled}
                  style={{ cursor: isDisabled ? 'disabled' : '' }}
                >
                  In den Warenkorb
                </Styled.Button>
              </Styled.BuySection>
            </Styled.AddContainer>
            <Styled.Notes>
              <p>🚛 KOSTENLOSER VERSAND & RÜCKVERSAND</p>
              <p>🔄 100 TAGE RÜCKGABERECHT</p>
              <p>📄 KAUF AUF RECHNUNG MÖGLICH</p>
            </Styled.Notes>
          </Styled.InfoContainer>
        </Styled.Wrapper>
      )}
    </Styled.Container>
  );
};

export default Product;
