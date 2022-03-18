import React from 'react';
import * as Styled from './styles';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <Styled.User>
      <Styled.TitleContainer>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <Styled.AddButton>Create</Styled.AddButton>
        </Link>
      </Styled.TitleContainer>
      <Styled.Container>
        <Styled.Show>
          <Styled.ShowTop>
            <Styled.ShowImg
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <Styled.ShowTopTitle>
              <Styled.ShowUsername>Anna Becker</Styled.ShowUsername>
              <Styled.ShowUserTitle>Software Engineer</Styled.ShowUserTitle>
            </Styled.ShowTopTitle>
          </Styled.ShowTop>
          <Styled.ShowBottom>
            <Styled.ShowUserTitle>Account Details</Styled.ShowUserTitle>
            <Styled.ShowInfo>
              <PermIdentity className='userShowIcon' />
              <Styled.ShowInfoTitle>annabeck99</Styled.ShowInfoTitle>
            </Styled.ShowInfo>
            <Styled.ShowInfo>
              <CalendarToday className='userShowIcon' />
              <Styled.ShowInfoTitle>10.12.1999</Styled.ShowInfoTitle>
            </Styled.ShowInfo>
            <span>Contact Details</span>
            <Styled.ShowInfo>
              <PhoneAndroid className='userShowIcon' />
              <Styled.ShowInfoTitle>+1 123 456 67</Styled.ShowInfoTitle>
            </Styled.ShowInfo>
            <Styled.ShowInfo>
              <MailOutline className='userShowIcon' />
              <Styled.ShowInfoTitle>annabeck99@gmail.com</Styled.ShowInfoTitle>
            </Styled.ShowInfo>
            <Styled.ShowInfo>
              <LocationSearching className='userShowIcon' />
              <Styled.ShowInfoTitle>New York | USA</Styled.ShowInfoTitle>
            </Styled.ShowInfo>
          </Styled.ShowBottom>
        </Styled.Show>
        <Styled.Update>
          <Styled.UpdateTitle>Edit</Styled.UpdateTitle>
          <Styled.UpdateForm>
            <Styled.UpdateLeft>
              <Styled.UpdateItem>
                <label>Username</label>
                <Styled.UpdateInput type='text' placeholder='annabeck99' />
              </Styled.UpdateItem>
              <Styled.UpdateItem>
                <label>Full Name</label>
                <Styled.UpdateInput type='text' placeholder='Anna Becker' />
              </Styled.UpdateItem>
              <Styled.UpdateItem>
                <label>Email</label>
                <Styled.UpdateInput
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='userUpdateInput'
                />
              </Styled.UpdateItem>
              <Styled.UpdateItem>
                <label>Phone</label>
                <Styled.UpdateInput type='text' placeholder='+1 123 456 67' />
              </Styled.UpdateItem>
              <Styled.UpdateItem>
                <label>Address</label>
                <Styled.UpdateInput type='text' placeholder='New York | USA' />
              </Styled.UpdateItem>
            </Styled.UpdateLeft>
            <Styled.UpdateRight>
              <Styled.UpdateUpload>
                <Styled.UpdateImg
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </Styled.UpdateUpload>
              <Styled.UpdateButton>Update</Styled.UpdateButton>
            </Styled.UpdateRight>
          </Styled.UpdateForm>
        </Styled.Update>
      </Styled.Container>
    </Styled.User>
  );
}
