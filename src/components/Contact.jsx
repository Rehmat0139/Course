import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          <form
            style={{
              boxSizing: "border-box",
              width: "100%",
              maxWidth: "500px", // Limit the width of the form on larger screens
              padding: "0 15px", // Add padding to the form on smaller screens
            }}
          >
            <h1 className="text-center mb-5">Contact Us</h1>
            <div className="form-outline mb-4">
              <label htmlFor="name">Name</label>
              <input
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                id="email"
                className="form-control"
                style={{width:'100%'}}
              />
            </div>
            <label htmlFor="message">Message</label>
            <div className="form-outline mb-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                placeholder="Send your queries"
                rows="2"
                className="form-control"
              ></textarea>
            </div>
            <Link to="/Request">
              <button className="btn btn-warning mb-3">Send Email</button>
            </Link>
            <p>
              Request for a course? <Link to="/Request">Click</Link> here
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
