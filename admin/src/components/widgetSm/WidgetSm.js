import React, { useEffect, useState } from 'react';
import { userReq } from '../../helpers/requestMethods';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userReq.get('users/?new=true');
        setUsers(res.data);
      } catch (err) {
        alert(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img
              src={
                users.img ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wsy.dk%2Fwp-content%2Fuploads%2F2016%2F01%2FAvatar-placeholder.png&f=1&nofb=1'
              }
              alt='avatar'
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
