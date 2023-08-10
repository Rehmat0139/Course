import React from "react";
import { Link } from "react-router-dom";

const Paymentsuccess = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="container"
          style={{
            width: "40%",
          }}
        >
          <h1 className="text-center">Package Payment</h1>
          <div
            className="p-2 mt-3 bg-warning"
            style={{ borderRadius: "10px 10px 0 0" }}
          >
            <p className="mt-3 fw-bold">Payment Successfull</p>
          </div>
          <div
            className="p-5 d-flex flex-column"
            style={{ fontFamily: "sans-serif", border: "1px solid yellow" }}
          >
            <p className="text-center">
              Congratulation's you are a Pro member now. you can access all the
              content
            </p>
            <span className="text-center fs-1">
              <i className="bi bi-check2-square"></i>
            </span>
            <Link to="/Profile" className="text-center mt-3">
              <button className="btn btn-warning">Go to Profile</button>
            </Link>
            <p className="mt-5">
              <span className="fw-bold">Reference : </span>fjdkjdljsldjj
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentsuccess;
