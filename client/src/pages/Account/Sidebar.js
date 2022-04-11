import React, { useEffect, useState } from 'react';
import { login } from '../../redux/apiCalls.redux';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userReq } from '../../helpers/requestMethods';
import { format } from 'timeago.js';

const Sidebar = () => {
  return (
    <Styled.Sidebar>
      <Styled.Title>Übersicht</Styled.Title>
      <Styled.Sidelist>
        <Styled.SideLinks to='/account/orders'>Bestellung</Styled.SideLinks>
        <Styled.SideLinks to='/account/user'>Konto</Styled.SideLinks>
        <Styled.SideLinks to='/account/newsletter'>Newsletter</Styled.SideLinks>
      </Styled.Sidelist>
    </Styled.Sidebar>
  );
};

export default Sidebar;
