import React from 'react';
import * as Styled from './styles';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Left>
        <Styled.Logo>SHOOP DEV. OOP</Styled.Logo>
        <Styled.List>
          <Styled.StyledLink to='/account'>
            <Styled.ListItem>Mein Konto</Styled.ListItem>
          </Styled.StyledLink>
          <Styled.StyledLink to='/orders'>
            <Styled.ListItem>Bestellverfolgung</Styled.ListItem>
          </Styled.StyledLink>
          <Styled.StyledLink to='/wishlist'>
            <Styled.ListItem>Wunschliste</Styled.ListItem>
          </Styled.StyledLink>
          <Styled.StyledLink to='/agb'>
            <Styled.ListItem>AGB</Styled.ListItem>
          </Styled.StyledLink>
        </Styled.List>
      </Styled.Left>
      <Styled.Right>
        <Styled.Title>Soziale Medien</Styled.Title>
        <Styled.SocialContainer>
          <Styled.StyledLink to='/#'>
            <Styled.SocialIcon color='4267B2'>
              <Facebook />
            </Styled.SocialIcon>
          </Styled.StyledLink>
          <Styled.StyledLink to='/#'>
            <Styled.SocialIcon color='FD1D1D'>
              <Instagram />
            </Styled.SocialIcon>
          </Styled.StyledLink>
          <Styled.StyledLink to='/#'>
            <Styled.SocialIcon color='1DA1F2'>
              <Twitter />
            </Styled.SocialIcon>
          </Styled.StyledLink>
        </Styled.SocialContainer>
      </Styled.Right>
    </Styled.Container>
  );
};

export default Footer;
