import React from 'react';
import * as Styled from './styles';

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
