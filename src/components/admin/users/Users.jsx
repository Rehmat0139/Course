import React from "react";
import Sidebar from "../Sidebar";

const Users = () => {
  const users = [
    {
      _id: "123",
      name: "John",
      email: "john@example.com",
      role: "admin",
      subscription: {
        status: "active",
      },
    },
  ];

  const changeHandler = (userId) => {
    console.log(userId);
  };
  const deleteHandler = (userId) => {
    console.log(userId);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h1 className="text-center mb-4">User's Data</h1>
          <div className="table-responsive">
            <table className="table usertable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Subscription</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <TableRow
                    changeHandler={changeHandler}
                    deleteHandler={deleteHandler}
                    key={item._id}
                    item={item}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-3">All Available User In The Database</p>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Users;

function TableRow({ item, changeHandler, deleteHandler }) {
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>{item.subscription.status === "active" ? "Active" : "Not Active"}</td>
      <td>
        <div>
          <button
            changeHandler={changeHandler}
            className="btn border-secondary btn-warning mx-4"
            onClick={() => changeHandler(item._id)}
          >
            Change role
          </button>
          <button
            deleteHandler={deleteHandler}
            className="btn border-secondary"
            onClick={() => deleteHandler(item._id)}
          >
            {" "}
            <i className="fs-6 bi bi-trash-fill"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
