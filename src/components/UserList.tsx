// src/components/UserList.js
import React from 'react';

function UserList({ users }) {
  return (
    <ul className="mb-4">
      {users.map(user => (
        <li key={user.id} className="p-2 border-b">
          <p className="font-bold">{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
