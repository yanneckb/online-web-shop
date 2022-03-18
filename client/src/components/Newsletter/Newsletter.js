import React from 'react';
import * as Styled from './styles';
import { Send } from '@material-ui/icons';

const Newsletter = () => {
  return (
    <Styled.Container>
      <Styled.Title>Newsletter</Styled.Title>
      <Styled.Desc>
        Erhalte alle aktuellen Infos sowie exklusive Aktionsvorteile!
      </Styled.Desc>
      <Styled.InputContainer>
        <Styled.Input placeholder='Deine Email Adresse' />
        <Styled.Button>
          <Send />
        </Styled.Button>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default Newsletter;
