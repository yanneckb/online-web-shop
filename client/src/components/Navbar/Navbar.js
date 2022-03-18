import React from 'react';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls.redux';

const Navbar = () => {
  const qty = useSelector((state) => state.cart.qty);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    await logout(dispatch);
    window.location.reload();
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Left>
          <Styled.Language>DE</Styled.Language>
          {user ? (
            <>
              <button onClick={handleClick}>
                <Styled.MenuItem>Logout</Styled.MenuItem>
              </button>
            </>
          ) : (
            <>
              <Styled.StyledLink to='/register'>
                <Styled.MenuItem>Registrieren</Styled.MenuItem>
              </Styled.StyledLink>
              <Styled.StyledLink to='/login'>
                <Styled.MenuItem>Login</Styled.MenuItem>
              </Styled.StyledLink>
            </>
          )}
        </Styled.Left>
        <Styled.Center>
          <Styled.StyledLink to='/'>
            <Styled.Logo>SHOOP DEV. OOP</Styled.Logo>
          </Styled.StyledLink>
        </Styled.Center>
        <Styled.Right>
          <Styled.StyledLink to='/cart'>
            <Styled.MenuItem>
              <Badge badgeContent={qty} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Styled.MenuItem>
          </Styled.StyledLink>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Navbar;
