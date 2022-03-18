import styled from 'styled-components';
import { mobile } from '../../responsive';
import { darkGradientBtn, fadingBackground } from '../../styles/global.styles';

export const Container = styled.div`
  height: 35vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${fadingBackground};
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  ${mobile({ fontSize: '2rem' })}
`;

export const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '1rem' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: none;
  ${mobile({ width: '80%' })}
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  cursor: pointer;
  ${darkGradientBtn}
`;
