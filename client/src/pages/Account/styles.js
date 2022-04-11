import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
import {
  colorGradientBtn,
  darkGradientBtn,
  gradientBorder,
  hoverShadow,
  colorOne,
  colorTwo,
  redGradientBtn,
} from '../../styles/global.styles';

// ACCOUNT
export const Wrapper = styled.div`
  min-height: 70vh;
  padding: 5rem;
  display: flex;
  flex-direction: row;
  ${mobile({ flexDirection: 'column', padding: '2rem' })}
`;
export const Caption = styled.h3``;
export const OrderInfo = styled.div``;
export const OrderProducts = styled.div``;

export const Container = styled.div`
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  flex: 4;
  margin-left: 1rem;
  ${hoverShadow};
  ${mobile({ padding: '2rem', marginLeft: '0' })}
`;
export const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`;
export const Subtitle = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  text-align: left;
  font-weight: 300;
  padding: 1.5rem 0 0.5rem 0;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  border-radius: 0.3rem;
  padding: 10px;
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  padding: 15px 20px;
  margin: 1rem 0;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  ${colorGradientBtn}
  &:disabled {
    cursor: not-allowed;
    background-color: grey;
  }
`;
export const StyledAnchor = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
`;
export const Error = styled.span`
  text-align: center;
  color: #953b43;
  margin-bottom: 1rem;
`;

// SIDEBAR
export const Sidebar = styled.div`
  flex: 1;
  border-radius: 1rem;
  padding: 3.5rem 3rem;
  margin-right: 1rem;
  ${hoverShadow};
  ${mobile({
    padding: '2rem',
    marginRight: '0',
    marginBottom: '1.5rem',
  })}
`;
export const Sidelist = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  ${mobile({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem 0',
  })}
`;
export const SideLinks = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem 0;
  &:before {
    content: '👉 ';
  }
`;

// ORDERS
export const OrderContainer = styled.div`
  flex: 4;
  text-align: center;
`;
export const OrderNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
`;
export const OrderBtn = styled.button`
  border: none;
  background: transparent;
  margin: 0 0.75rem;
  &:hover {
    color: ${colorOne};
    cursor: pointer;
  }
`;
export const Orders = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const OrderBox = styled.div`
  padding: 1rem 0;
`;
export const OrderText = styled.span`
  padding: 0.5rem 0;
`;

// User
export const UserContainer = styled.div`
  flex: 4;
`;
export const UserNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid grey;
`;
export const UserBtn = styled.button`
  border: none;
  background: transparent;
  margin: 0 0.75rem;
  &:hover {
    color: ${colorOne};
    cursor: pointer;
  }
`;
export const User = styled.div`
  padding: 1rem 0;
`;
export const UserBox = styled.div`
  padding: 1rem 0;
`;
export const UserText = styled.div`
  padding: 0.5rem 0;
`;
export const PwBtn = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: white;
  ${darkGradientBtn};
`;
export const DelBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 0 1rem;
  ${redGradientBtn};
`;
export const UserInput = styled.input`
  padding: 0.5rem;
  width: 25vw;
  border-radius: 0.3rem;
  border: 1px solid grey;
  display: block;
  ${mobile({ width: '100%' })}
`;
export const UserLabel = styled.label`
  display: block;
  padding: 0.5rem 0 0.25rem 0;
`;
