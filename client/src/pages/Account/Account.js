import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';
import Sidebar from './Sidebar';

const Account = () => {
  const user =
    useSelector((state) => state.user.currentUser.savedUser) ||
    useSelector((state) => state.user.currentUser.user);

  return (
    <Styled.Wrapper>
      <Sidebar />
      <Styled.Container>
        <Styled.Title>Hallo, {user.firstName}!</Styled.Title>
        <hr />
        <Outlet />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Account;
