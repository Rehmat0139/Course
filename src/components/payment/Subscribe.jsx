import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="container"
          style={{
            width: "100%",
            maxWidth: "500px",
            boxSizing: "border-box",
          }}
        >
          <div className="d-flex flex-column">
            <h1 className="fw-bold fs-2 text-center">Welcome</h1>
            <div
              className="fw-bold p-2 mt-3 bg-warning"
              style={{ borderRadius: "10px 10px 0 0" }}
            >
              <p className="mt-3">Get the Pro Package - $79.00</p>
            </div>
            <div
              className="p-3"
              style={{
                fontFamily: "sans-serif",
                backgroundColor: "antiquewhite",
              }}
            >
              <p>Joining Pro Pack will give you access to every content</p>
              <h3 className="text-center">$79.00 only</h3>
            </div>
            <button className="btn btn-warning mt-3">Purchase Now</button>
            <div
              className="p-2 mt-2 text-white"
              style={{
                backgroundColor: "#9DB2BF",
                lineHeight: 1,
                borderRadius: "0 0 10px 10px",
              }}
            >
              <p className="fw-bold">100% REFUND AT CANCELLATION</p>
              <span>*Terms And Conditions Apply</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
