import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darkGradientBtn, hoverShadow } from '../../styles/global.styles';
import { mobile } from '../../responsive';

export const Container = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h2``;

export const Gif = styled.img`
  width: 380px;
  height: 300px;
  padding: 1.5rem;
  ${mobile({ width: '280px', height: '200px' })}
`;

export const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
  text-decoration: none;
  ${darkGradientBtn}
`;
