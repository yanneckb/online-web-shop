import styled from 'styled-components';
import { mobile } from '../../responsive';
import { darkGradientBtn, hoverShadow } from '../../styles/global.styles';

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 2rem 10vw;
  min-height: 40vw;
  ${mobile({ padding: '10px', display: 'flex', flexDirection: 'column' })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-right: auto;
  border: none;
  border-radius: 0.3rem;
  ${darkGradientBtn}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  ${mobile({ flexDirection: 'column' })}
`;

export const Items = styled.div`
  width: 50rem;
  ${mobile({ width: '100%' })}
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 1rem;
  padding: 0.75rem 2rem;
  margin-bottom: 1.5rem;
  ${hoverShadow}
  ${mobile({ flexDirection: 'column' })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 7rem;
  transition: all ease 0.5s 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Details = styled.div`
  padding: 0.75rem 0 0.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: pink;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

export const Sidebar = styled.div`
  ${mobile({ width: '100%' })}
`;

export const ShoppingInfo = styled.div``;

export const PaymentContainer = styled.div`
  border: 2px solid black;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const PaymentSvg = styled.img`
  height: 3.5rem;
  padding: 0.3rem;
  ${mobile({ height: '2.5rem' })}
`;

export const BuyButton = styled.button`
  background: black;
  border: 2px solid black;
  border-bottom: none;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-top: 2rem;
  width: 100%;
  height: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  transition: 0.2s ease-in;
  &:before {
    content: '👉';
    padding-right: 0.6rem;
  }
  &:hover {
    background: white;
    color: black;
  }
`;

export const TotalCart = styled.div`
  border-radius: 1rem;
  width: 25rem;
  background: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${hoverShadow}
  ${mobile({ width: 'auto', alignItems: 'center' })}
`;

export const TotalTitle = styled.h2`
  margin: 0 0 4rem 0;
`;

export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.4);
`;

export const ShippingText = styled.p`
  margin: 0;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.h2`
  margin: 0;
  ${mobile({ fontSize: '1.5rem' })}
`;

export const InfoContainer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
`;

export const AmountButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: #667eea;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    color: #764ba2;
  }
`;

export const Amount = styled.div`
  padding: 0.7rem 0;
`;
