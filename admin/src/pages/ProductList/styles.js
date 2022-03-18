import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';

export const List = styled.div`
  flex: 4;
  padding: 0 2rem;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export const ListDelete = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
