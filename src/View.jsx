import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const View = () => {
  const params = useParams();
  const id = params.id;
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === parseInt(id));

  if (!existingUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">View User</div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>ID:</strong> {existingUser.id}
                </li>
                <li className="list-group-item">
                  <strong>Name:</strong> {existingUser.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {existingUser.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone Number:</strong> {existingUser.phoneNumber}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;