import React, { useState } from "react";

const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center my-5">Change Your Password</h1>
          <form style={{ width: "50%" }}>
            <div className="col-md-10">
              <div className="form-group my-3">
                <label for="exampleInputPassword1">Old Password</label>
                <input
                  value={oldPassword}
                  onChange={setOldPassword}
                  type="password"
                  className="form-control"
                  placeholder="Enter Old Password"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">New Password</label>
                <input
                  value={newPassword}
                  onChange={setNewPassword}
                  type="password"
                  className="form-control"
                  placeholder="Enter New Password"
                />
              </div>
            </div>
            <div className="m-3">
              <button className="btn btn-warning" style={{ width: "80%" }}>
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
