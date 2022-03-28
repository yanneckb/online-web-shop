import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
import { colorGradientBtn, gradientBorder } from '../../styles/global.styles';

export const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '90vh' })}
`;

export const Wrapper = styled.div`
  text-align: center;
  width: 40%;
  padding: 3rem;
  background-color: #fff;
  ${gradientBorder}
  ${mobile({ width: '100%', margin: '0 0.75rem' })}
`;

export const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5rem 0.25rem;
  border-radius: 0.3rem;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
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
`;

export const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  color: black;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
`;

export const Error = styled.span`
  text-align: center;
  color: #953b43;
  margin-bottom: 1rem;
`;
