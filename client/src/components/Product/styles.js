import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';
import { hoverShadow } from '../../styles/global.styles';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`;

export const Image = styled.img`
  height: 15vw;
  z-index: 2;
  ${mobile({ height: '20vh' })}
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-radius: 1rem;
  ${hoverShadow}
`;

// // background-color: #fdfcf5;

export const ImgContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div``;

export const Title = styled.p`
  font-size: 1.2rem;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
`;
