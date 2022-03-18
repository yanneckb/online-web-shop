import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 50%;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: 'column' })}
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
`;

export const Logo = styled.h1`
  text-align: center;
  ${mobile({ fontSize: '1.5rem' })}
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 1rem 0 0 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const ListItem = styled.li``;

export const Right = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;
