import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getuser } from "../service/Api";

const AllUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getalluser();
  }, []);

  const getalluser = async () => {
    const response = await getuser();
    console.log(response.data);
    setUser(response.data);
  };
  return (
    <div>
      <div className="container">
        <h1>all user</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">city</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => (
              <tr>
                <th scope="row">{users.id}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.city}</td>
                <td>
                  <Link className="btn btn-primary" to="/edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link className="btn btn-danger" to="/delete">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
