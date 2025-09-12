// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
