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
      <Styled.StyledLink to='/account/orders'>Bestellung</Styled.StyledLink>
    </Styled.Sidebar>
  );
};

export default Sidebar;
