import React, { useState } from "react";

const Updateprofile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center my-5">Update profile</h1>
          <form style={{ width: "50%"}}>
          <div className="form-outline mb-4">
              <input
                value={name}
                onChange={setName}
                type="text"
                placeholder="Enter Name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="Email Address"
                id="email"
                className="form-control"
                style={{width:'100%'}}
              />
            </div>
            <div className=" d-flex justify-content-center">
              <button className="btn btn-warning" style={{ width: "80%" }}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;
