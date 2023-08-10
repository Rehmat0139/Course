import React from "react";
import Sidebar from "../Sidebar";
import { useState } from "react";

const Createcourses = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState();
 
  const categories = [
    "MERN Stack Development",
    "Web development",
    "Machine learning",
    "MEAN Stack Development",
    "App development",
    "Data analysis",
    "Data Science",
  ];

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <h2 className="text-center mb-5 text-warning">Create Courses</h2>
          <div
            className="container d-flex flex-column justify-content-center align-items-center p-4"
            style={{ width: "100%", maxWidth: "600px", boxShadow: "5px 10px 5px 10px #9DB2BF" }}
          >
            <div className="d-flex p-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex p-3">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex p-3">
              <input
                type="text"
                placeholder="Creator Name"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex p-3">
              <select
                value={category}
                name={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                style={{ width: "100%", height: 40 }}
              >
                <option>Select Course</option>
                {categories.map((item ,index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="d-flex p-2">
              <input type="file" onChange={handleChange} />
              <img src={file} alt="😃" height="100" />
            </div>
            <div className="d-flex p-2">
              <button
                className="btn btn-warning"
                type="submit"
                style={{ width: "100%" }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Createcourses;
