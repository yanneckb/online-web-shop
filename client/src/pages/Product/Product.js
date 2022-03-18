import React, { useEffect, useState } from 'react';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';
import { publicReq } from '../../helpers/requestMethods';
import { Add, Remove } from '@material-ui/icons';
import { addProduct } from '../../redux/cart.redux';
import { useDispatch } from 'react-redux';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQty = (type) => {
    if (type === 'dec') {
      qty > 1 && setQty(qty - 1);
    }
    if (type === 'acs') {
      qty < 99 && setQty(qty + 1);
    }
  };

  const handleClick = () => {
    // UPDATE CART
    dispatch(addProduct({ ...product, qty, color, size }));
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.ImgContainer>
          <Styled.Image src={product.img} />
        </Styled.ImgContainer>
        <Styled.InfoContainer>
          <Styled.CategoryContainer>
            <Styled.Category>{product.categories}</Styled.Category>
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
                />
              ))}
            </Styled.Filter>
            <Styled.Filter>
              <Styled.FilterTitle>Größe: </Styled.FilterTitle>
              <Styled.FilterSize onChange={(e) => setSize(e.target.value)}>
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
              <Styled.Button onClick={handleClick}>
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
    </Styled.Container>
  );
};

export default Product;
