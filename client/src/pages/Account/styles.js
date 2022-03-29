import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
import {
  colorGradientBtn,
  gradientBorder,
  hoverShadow,
} from '../../styles/global.styles';

export const Wrapper = styled.div`
  min-height: 70vh;
  padding: 5rem;
`;

export const Caption = styled.h3``;

export const OrderInfo = styled.div``;

export const OrderProducts = styled.div``;

export const Orders = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid grey;
`;

export const Container = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  ${hoverShadow};
`;

export const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
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
`;

export const OrderContainer = styled.div`
  flex: 4;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
