import React, { useState } from 'react';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>Login</Styled.Title>
        <Styled.Form>
          <Styled.Input
            placeholder='Nutzername'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            style={
              error
                ? {
                    border: '1px solid #953b43',
                    backgroundColor: '#f8d7da',
                    color: '#953b43',
                  }
                : {
                    border: '1px solid grey',
                    backgroundColor: 'none',
                    color: '#black',
                  }
            }
          />
          <Styled.Input
            placeholder='Passwort'
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            style={
              error
                ? {
                    border: '1px solid #953b43',
                    backgroundColor: '#f8d7da',
                    color: '#953b43',
                  }
                : {
                    border: '1px solid grey',
                    backgroundColor: 'none',
                    color: '#black',
                  }
            }
          />
          <Styled.Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Styled.Button>
          {error && (
            <Styled.Error>Nutzername oder Passwort ist falsch!</Styled.Error>
          )}
          <Styled.StyledLink to='/'>Passwort vergessen?</Styled.StyledLink>
          <Styled.StyledLink to='/register'>Registrieren</Styled.StyledLink>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Login;
