import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';

const Success = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <Styled.Container>
      <Styled.Title>Yay, deine Bestellung ist eingegangen!</Styled.Title>
      <Styled.Gif src='https://media.giphy.com/media/GA1s4aZhfe5f2N3fFb/giphy.gif' />
      <Styled.StyledLink to='/'>Zurück zum Shop</Styled.StyledLink>
    </Styled.Container>
  );
};

export default Success;
