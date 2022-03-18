import React from 'react';
import * as Styled from './styles';

export default function Error() {
  
  return (
    <Styled.Container>
      <Styled.Error>
        <Styled.Notification>Du hast leider keine Rechte um das Dashboard zu benutzen!</Styled.Notification>
      </Styled.Error>
    </Styled.Container>
  );
}
