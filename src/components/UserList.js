import React from 'react';
import './styles/UserList.css';

class UserList extends React.Component {
  render() {
    const { userlist } = this.props;

    const users = userlist.map((user, key) => (
      <li className='userList-li' key={key}>
        <p className='userList-online'>.</p>

        {user.username}
      </li>
    ));

    return (
      <div className='userList-container'>
        <p className='userList-title'>Users in chat</p>

        <ul className='userList-ul'>{users}</ul>
      </div>
    );
  }
}

export default UserList;
