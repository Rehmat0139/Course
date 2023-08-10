import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

const Coursecard = ({
  title,
  description,
  views,
  imgSrc,
  id,
  creator,
  lectures,
  addToList,
}) => {
  return (
    <>
      <div className="container-fluid m-10">
        <div className="courses container d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-courses" src={imgSrc} alt="..." />
            <div className="card-body" style={{ lineHeight: 1 }}>
              <h5 className="card-title">{title}</h5>
              <p>{description}</p>
              <p>
                <span className="fw-bold">Creator :</span>
                {creator}
              </p>
              <p>
                <span className="fw-bold">Lectures :</span>
                {lectures}
              </p>
              <p>
                <span className="fw-bold">Views :</span>
                {views}
              </p>
              <Link to='/CoursePage'>  
                <button className="btn btn-warning">Watch now</button>
              </Link>
              <button className="btn text-warning">{addToList}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursecard;
