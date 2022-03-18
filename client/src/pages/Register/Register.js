import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { publicReq } from '../../helpers/requestMethods';
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
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } =
      user;
    if (password !== confirmPassword) {
      alert('Passwörter stimmen nicht überein!');
    } else if (
      (firstName, lastName, username, email, password, confirmPassword)
    ) {
      publicReq.post('auth/register', user);
    } else {
      alert('Ungülitge Eingaben!');
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
            placeholder='Email'
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
            placeholder='Passwort'
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
            placeholder='Passwort wiederholen'
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
              Es ist ein Fehler aufgetreten. Bitte überprüfe die Eingaben
            </Styled.Error>
          )}
        </Styled.Form>
        <Styled.Link>
          Hast du bereits ein Konto? Dann melde dich hier an!
        </Styled.Link>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Register;
