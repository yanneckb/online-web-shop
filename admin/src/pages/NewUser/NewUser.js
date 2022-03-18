import React from 'react';
import * as Styled from './styles';

export default function NewUser() {
  return (
    <Styled.NewUser>
      <Styled.Title>New User</Styled.Title>
      <Styled.Form>
        <Styled.Item>
          <Styled.Label>Username</Styled.Label>
          <Styled.Input type='text' placeholder='john' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Full Name</Styled.Label>
          <Styled.Input type='text' placeholder='John Smith' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Email</Styled.Label>
          <Styled.Input type='email' placeholder='john@gmail.com' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Password</Styled.Label>
          <Styled.Input type='password' placeholder='password' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Phone</Styled.Label>
          <Styled.Input type='text' placeholder='+1 123 456 78' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Address</Styled.Label>
          <Styled.Input type='text' placeholder='New York | USA' />
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Gender</Styled.Label>
          <Styled.Gender>
            <Styled.Input type='radio' name='gender' id='male' value='male' />
            <Styled.Label for='male'>Male</Styled.Label>
            <Styled.Input
              type='radio'
              name='gender'
              id='female'
              value='female'
            />
            <Styled.Label for='female'>Female</Styled.Label>
            <Styled.Input type='radio' name='gender' id='other' value='other' />
            <Styled.Label for='other'>Other</Styled.Label>
          </Styled.Gender>
        </Styled.Item>
        <Styled.Item>
          <Styled.Label>Active</Styled.Label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </Styled.Item>
        <Styled.Button>Create</Styled.Button>
      </Styled.Form>
    </Styled.NewUser>
  );
}
