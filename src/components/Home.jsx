import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row ">
            <div className="Left col-md-7 col-sm-10 d-flex justify-content-center flex-column align-items-end">
              <h1 className="text-sm-center">LEARN FROM THE EXPERTS</h1>
              <p>Find Valuable Courses at best price</p>
              <Link to="/Explore">
                <button className="btn btn-secondary text-dark fw-bold text-sm-center">
                  Explore
                </button>
              </Link>
            </div>
            <div className="col-md-5">
              <img
                className="image1"
                src="https://images.pexels.com/photos/8534172/pexels-photo-8534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginTop: "20vh" }}>
          <div
            className="bg-dark text-white"
          >
            <h1 className="text-center mx-20">Our Brands</h1>
            <div className="brand_icons d-flex justify-content-evenly">
              <i className="bi bi-google"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-meta"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
