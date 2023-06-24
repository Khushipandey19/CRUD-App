import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2>CRUD App</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create+
      </Link>
      <div className="row">
        {users.map((user, index) => {
          let a = user.id;
          return (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="card-text">
                    <strong>Phone:</strong> {user.phoneNumber}
                  </p>
                  <div className="btn-group" role="group">
                    <Link to={`/edit/${a}`} className="btn btn-sm btn-link">
                      <FaEdit /> Edit
                    </Link>
                    <Link to={`/view/${a}`} className="btn btn-sm btn-link">
                      <FaEye /> View
                    </Link>
                    <button
                      onClick={() => handleDelete(a)}
                      className="btn btn-sm btn-link"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Home;