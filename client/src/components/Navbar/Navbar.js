import React from 'react';
import { ShoppingCartOutlined } from '@material-ui/icons';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import * as Styled from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls.redux';

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    await logout(dispatch);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Left>
          <Styled.Language>DE</Styled.Language>
          {user ? (
            <>
              <Styled.LogoutBtn onClick={handleClick}>
                <Styled.MenuItem>Logout</Styled.MenuItem>
              </Styled.LogoutBtn>
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
          {user && (
            <Styled.StyledLink to='/account'>
              <Styled.MenuItem>
                <AccountCircleOutlinedIcon />
              </Styled.MenuItem>
            </Styled.StyledLink>
          )}
          <Styled.StyledLink to='/cart'>
            <Styled.MenuItem>
              <ShoppingCartOutlined />
            </Styled.MenuItem>
          </Styled.StyledLink>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Navbar;
