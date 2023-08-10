import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section className="form_page">
        <div className="container login-form login">
          <form className="form-outline m-5">
            <div className="text-center mb-3">
              <p>Sign in with</p>
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

            <p className="text-center">--- or ---</p>

            <div className="email form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Enter your email address
              </label>
              <input
                value={email}
                type="email"
                placeholder="Username"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="email form-outline mb-2">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                type="password"
                placeholder="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-4">
              <Link to="/Forgetpassword">Forgot password?</Link>
            </div>

            <button type="Submit" className="btn btn-warning">
              Login
            </button>

            <div className="text-center">
              <p>
                Not a member?{" "}
                <Link to="/Signup" className="text-warning">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
