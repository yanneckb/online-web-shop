import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/apiCalls.redux';
import * as Styled from './styles';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [checkPw, setCheckPw] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // HANDLE TEXT INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // HANDLE USER REGISTER
  const handleClick = async (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } =
      user;
    if (password === confirmPassword) {
      setCheckPw(false);
      if ((firstName, lastName, username, email, password)) {
        await register(dispatch, user);
        navigate('/login');
      } else {
        return alert('Bitte überprüfe deine Eingaben!');
      }
    } else {
      setCheckPw(true);
    }
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>Erstelle ein Konto</Styled.Title>
        <Styled.Form>
          <Styled.Input
            placeholder='Vorname'
            value={user.firstName}
            onChange={handleChange}
            name='firstName'
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
            placeholder='Nachname'
            value={user.lastName}
            name='lastName'
            onChange={handleChange}
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
            placeholder='Nutzername'
            value={user.username}
            name='username'
            onChange={handleChange}
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
            value={user.password}
            name='password'
            onChange={handleChange}
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
            placeholder='Email'
            type='email'
            value={user.email}
            name='email'
            onChange={handleChange}
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
            placeholder='Passwort wiederholen'
            type='password'
            value={user.confirmPassword}
            name='confirmPassword'
            onChange={handleChange}
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
          <Styled.Agreement>
            Mit der Erstellung eines Kontos stimme ich der Verarbeitung meiner
            personenbezogenen Daten gemäß der <b>DATENSCHUTZERKLÄRUNG</b> zu
          </Styled.Agreement>
          <Styled.Button onClick={handleClick} disabled={isFetching}>
            Registrieren
          </Styled.Button>
          {error && (
            <Styled.Error>
              Es ist ein Fehler aufgetreten. Bitte überprüfe die Eingaben!
            </Styled.Error>
          )}
          {checkPw && (
            <Styled.Error>Deine Passwörter stimmen nicht überein!</Styled.Error>
          )}
        </Styled.Form>
        <Styled.StyledLink to='/login'>
          Hast du bereits ein Konto? Dann melde dich hier an!
        </Styled.StyledLink>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Register;
