import React, { useState } from "react";
import Coursecard from "./Courses/Coursecard";

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const categories = [
    "MERN Stack Development",
    "Web development",
    "Machine learning",
    "MEAN Stack Development",
    "App development",
    "Data analysis",
    "Data Science",
  ];

  const catStyles = {
    width: "70%",
    margin: 10,
    gap: 10,
    marginLeft: "15%",
    fontSize: "1px sans-serif",
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <div className="container-fluid" style={{ marginBottom: "20px" }}>
        <div className="d-flex justify-content-center">
          <h1>All Courses</h1>
        </div>
        <div className="d-flex justify-content-center">
          <input
            value={keyword}
            type="text"
            placeholder="Search a course..."
            onChange={handleKeywordChange}
            style={{
              width: "100%",
              maxWidth: "400px",
              border: "1px solid yellow",
              borderRadius: 8,
              padding: "5px 10px",
            }}
          />
        </div>
        <div
          className="course-list d-flex flex-wrap justify-content-center"
          style={catStyles}
        >
          {categories.map((category, i) => (
            <button key={i} type="button" className="btn btn-secondary">
              {category}
            </button>
          ))}
        </div>
      </div>
      <Coursecard
        imgSrc="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
        title={"Sample"}
        description={"Sample"}
        creator={"John"}
        lectures={5}
        views={12}
        addToList={"Add to Playlist"}
      />
    </>
  );
};

export default Courses;
