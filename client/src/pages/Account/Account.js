import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './styles';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const Account = () => {
  const user =
    useSelector((state) => state.user.currentUser.savedUser) ||
    useSelector((state) => state.user.currentUser.user);

  return (
    <Styled.Wrapper>
      <Sidebar />
      <Styled.Container>
        {user ? (
          <>
            <Styled.Title>Hallo, {user.firstName}!</Styled.Title>
            <hr />
            <Outlet />
          </>
        ) : (
          <p>Bitte melde dich an um diesen Bereich zu sehen!</p>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Account;
