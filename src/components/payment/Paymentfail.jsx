import React from "react";
import { Link } from "react-router-dom";

const Paymentfail = () => {
  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-item-center">
        <div style={{ marginTop: 80, width: "40%" }}>
          <div className="text-center" style={{ fontSize: 60 }}>
            <span>
              <i class="bi bi-exclamation-diamond"></i>
            </span>
          </div>
          <h1 className="text-center">PAYMENT FAILED</h1>
          <div className="text-center">
            <Link to="/Subscribe">
              <button className="btn btn-secondary mt-3">Try Again</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentfail;
