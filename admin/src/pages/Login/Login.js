import { useState } from 'react';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls.redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Styled.Login>
          <Styled.Container>
              <Styled.Input
        type='text'
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <Styled.Input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
              <Styled.Button onClick={handleClick}>Login</Styled.Button>
          </Styled.Container>
    </Styled.Login>
  );
};

export default Login;
