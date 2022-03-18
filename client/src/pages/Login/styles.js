import styled from 'styled-components';
import { mobile } from '../../responsive';
import { colorGradientBtn, gradientBorder } from '../../styles/global.styles';

export const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
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

export const Link = styled.a`
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
