import React, { useState } from "react";
import { Link } from "react-router-dom";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courses, setCourses] = useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          <form
            style={{
              boxSizing: "border-box",
              width: "80%",
              maxWidth: "300px", 
            }}
          >
            <h1 className="text-center mb-5">Contact Us</h1>
            <div className="form-outline mb-4">
              <label htmlFor="name">Full Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                id="name"
                className="form-control"
              />
            </div>
            <label htmlFor="email">Email</label>
            <div className="form-outline mb-4">
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                id="email"
                className="form-control"
                style={{width:'100%'}}
              />
            </div>
            <label htmlFor="courses">Courses</label>
            <div className="form-outline mb-4">
              <textarea
                required
                value={courses}
                onChange={(e) => setCourses(e.target.value)}
                name="courses"
                id="courses"
                placeholder="What courses you want to choose..."
                rows="2"
                className="form-control"
              ></textarea>
            </div>
            <Link to="/Courses">
              <button className="btn btn-warning mb-3">Request Courses</button>
            </Link>
            <p>
              See available courses 👉 <Link to="/Courses">Click</Link> here
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
