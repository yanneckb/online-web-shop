import styled from 'styled-components';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  ${mobile({ padding: '0.25rem 0' })}
`;

export const LogoutBtn = styled.button`
  text-decoration: none;
  color: black;
  border: none;
  background: none;
  ${mobile({ padding: '0.25rem 0' })}
`;

export const Container = styled.div`
  height: 60px;
  padding: 0 4rem;
  ${mobile({
    height: 'auto',
    padding: '0',
  })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '0.5rem 0', display: 'flex', alignItems: 'center' })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  ${mobile({ flexDirection: 'column' })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  ${mobile({ display: 'none' })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ width: '3rem' })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: 'center' })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
