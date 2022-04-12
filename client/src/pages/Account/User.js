import React, { useEffect, useState } from 'react';
import { updateUserData, deleteUser, logout } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const User = () => {
  const dispatch = useDispatch();
  const user =
    useSelector((state) => state.user.currentUser.savedUser) ||
    useSelector((state) => state.user.currentUser.user);
  const [isLoading, setIsLoading] = useState(true);
  const [updateUser, setUpdateUser] = useState({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  });

  useEffect(async () => {
    setIsLoading(false);
  }, [updateUser]);

  // UPDATE USER DATA
  const handleClick = async () => {
    await updateUserData(dispatch, { updateUser, _id: user._id });
  };

  // HANDLE USER DELETE
  const handleDelete = async () => {
    await deleteUser(dispatch, { _id: user._id });
    await logout(dispatch);
  };

  return (
    <Styled.UserContainer>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '20vh',
          }}
        >
          <Loader />
        </div>
      ) : (
        <Styled.UserBox>
          <Styled.Caption>Meine Konto</Styled.Caption>
          <Styled.User>
            <Styled.Subtitle>Account Daten</Styled.Subtitle>
            <Styled.UserText>
              <Styled.UserLabel htmlFor='username'>Nutzername</Styled.UserLabel>
              <Styled.UserInput
                type='text'
                name='username'
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, username: e.target.value })
                }
                placeholder={user.username}
              />
            </Styled.UserText>
            <Styled.UserText>
              <Styled.UserLabel htmlFor='email'>Email</Styled.UserLabel>
              <Styled.UserInput
                type='text'
                name='email'
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, email: e.target.value })
                }
                placeholder={user.email}
              />
            </Styled.UserText>
          </Styled.User>
          <Styled.User>
            <Styled.Subtitle>Persönliche Daten</Styled.Subtitle>
            <Styled.UserText>
              <Styled.UserLabel htmlFor='firstName'>Vorname</Styled.UserLabel>
              <Styled.UserInput
                type='text'
                name='firstName'
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, firstName: e.target.value })
                }
                placeholder={user.firstName}
              />
            </Styled.UserText>
            <Styled.UserText>
              <Styled.UserLabel htmlFor='lastName'>Nachname</Styled.UserLabel>
              <Styled.UserInput
                type='text'
                name='lastName'
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, lastName: e.target.value })
                }
                placeholder={user.lastName}
              />
            </Styled.UserText>
            <Styled.UserText>
              <Styled.UserLabel htmlFor='adress'>Adresse</Styled.UserLabel>
              <Styled.UserInput
                type='text'
                name='adress'
                // onChange={(e) =>
                //   setUpdateUser({ ...updateUser, address: e.target.value })
                // }
                placeholder='not supported'
              />
            </Styled.UserText>
            <Styled.UserText></Styled.UserText>
          </Styled.User>
          <Styled.PwBtn onClick={handleClick}>Profil updaten</Styled.PwBtn>
          <Styled.DelBtn onClick={handleDelete}>Profil löschen</Styled.DelBtn>
        </Styled.UserBox>
      )}
    </Styled.UserContainer>
  );
};

export default User;
