import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';

const Success = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Styled.Container>
      <h1>Bezahlung erfolgreich abgeschlossen!</h1>
    </Styled.Container>
  );
};

export default Success;
