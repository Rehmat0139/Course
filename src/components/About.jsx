import React from "react";
import { Link } from "react-router-dom";
import TcDetails from "../content/TcDetails";

const About = () => {
  const TandC = ({ termsandcondition }) => (
    <>
      <div className="container-fluid">
        <div className="container d-flex flex-column justify-content-center" style={{ width: '60%', overflow: 'hidden' }}>
          <div className="mt-5">
            <h3>Terms And Conditions</h3>
          </div>
          <div style={{ overflowY: "scroll", height: "400px" }}>
            {termsandcondition}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container-fluid">
        <div
          className="container"
          style={{
            width: "100%",
            maxWidth: "800px", 
            boxSizing: "border-box",
            border: "1px solid #9DB2BF",
            boxShadow: "5px 10px #9DB2BF",
            margin: "0 auto",
          }}
        >
          <div className="d-flex flex-column">
            <h1 style={{ textAlign: "center" }}>About us</h1>
            <div className="d-flex flex-column flex-md-row"> 
              <div
                className="d-flex flex-column justify-content-center p-5 m-5"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid #9DB2BF",
                  boxShadow: "8px 5px 3px  #9DB2BF",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80"
                  alt="..."
                  style={{
                    height: "150px",
                    borderRadius: "50%",
                    marginBottom: 8,
                  }}
                />
                <h5 style={{ opacity: "0.5", textAlign: "center" }}>Founder</h5>
              </div>
              <div className="d-flex flex-column p-5 m-5">
                <h3>Rehmat Shaikh</h3>
                <p>
                  Hi, I'm an aspiring MERN stack developer. Mission to be the
                  best in coding
                </p>
              </div>
            </div>
            <div className="text-center m-2">
              <Link to="/Subscribe">
                <button className="btn btn-warning">Check Our plans</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TandC termsandcondition={TcDetails} />
    </>
  );
};

export default About;
