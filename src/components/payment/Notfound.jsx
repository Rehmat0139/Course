import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-item-center">
        <div style={{ marginTop:80, width: "40%" }}>
          <div className="text-center" style={{ fontSize: 60 }}>
            <span>
              <i className="bi bi-exclamation-octagon-fill"></i>
            </span>
          </div>
          <h1 className="text-center">Page Not Found</h1>
          <div className="text-center">
            <Link to='/'>
              <button className="btn btn-secondary mt-3">
                Return To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
