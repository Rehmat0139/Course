import React from "react";

const Forgetpassword = () => {
  return (
    <div className="container-fluid">
      <div
        className="container"
        style={{ width: "50%"}}
      >
        <div>
          <h1>RESET PASSWORD</h1>
          <div class="mt-5">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button className="btn btn-warning mt-3">Send Confirmation to this Email address</button>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
