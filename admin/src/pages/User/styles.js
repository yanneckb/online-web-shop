import { PermIdentity } from '@material-ui/icons';
import styled from 'styled-components';

export const User = styled.div`
  flex: 4;
  padding: 1rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Show = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const Update = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

export const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ShowUsername = styled.span`
  font-weight: 600;
`;

export const ShowUserTitle = styled.span`
  font-weight: 300;
`;

export const ShowBottom = styled.div`
  margin-top: 20px;
`;

export const ShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

export const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

export const ShowIcon = styled(PermIdentity)`
  font-size: 16px !important;
`;

export const ShowInfoTitle = styled.span`
  margin-left: 10px;
`;

export const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const UpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

export const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UpdateLeft = styled.div``;

export const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const UpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

export const UpdateIcon = styled.div`
  cursor: pointer;
`;

export const UpdateButton = styled.div`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
