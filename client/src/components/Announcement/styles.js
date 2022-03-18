import styled from 'styled-components';
import { mobile } from '../../responsive';
import { fadingBackground } from '../../styles/global.styles';

export const Container = styled.div`
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${fadingBackground}
  ${mobile({ textAlign: 'center', padding: '0.5rem;' })}
`;
