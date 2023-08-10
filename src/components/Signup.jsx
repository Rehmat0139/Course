import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <>
      <section className="form_page">
        <div className="container login-form login">
          <form className="form-outline m-5">
            <div className="text-center mb-3">
              <p>Sign-up with</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-facebook"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="bi bi-github"></i>
              </button>
            </div>

            <p className="text-center">
              ------------------------- or -------------------------
            </p>

            <div className="form-outline mb-4">
              <input
                value={name}
                onChange={setName}
                type="text"
                placeholder="Name"
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
              />
            </div>
            <div className="form-outline mb-4">
              <input
                value={password}
                onChange={setPassword}
                type="password"
                placeholder="Password"
                id="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label for="formFileLg" className="form-label ">
                Choose Avatar
              </label>
              <input
              value={avatar}
              onChange={setAvatar}
                className="form-control form-control-sm"
                id="formFileLg"
                type="file"
              />
            </div>
            <div className="text-start">
              <p>
                Already a member ?{" "}
                <Link to="/Login" className="text-warning">
                  Log-in
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-warning btn-block"
              style={{ width: "100%", marginTop: 10 }}
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
