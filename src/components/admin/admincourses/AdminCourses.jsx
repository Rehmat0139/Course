import React from "react";
import Sidebar from "../Sidebar";
import "../../../App.css";
import ReactModal from "react-modal";
import CourseModal from "./CourseModal";
import { useState } from "react";

const AdminCourses = () => {
  const Courses = [
    {
      id: "1231223u2y3u2y3iy2iy",
      title: "React course",
      category: "Web development",
      createdBy: "Rehmat",
      views: 1223,
      lecture: 20,
      poster: {
        url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
      },
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const courseHandler = (userId) => {
    setModalOpen(true);
  };
  const deleteHandler = (userId) => {
    console.log(userId);
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-9">
        <h1 className="text-center mb-5 text-warning">Courses</h1>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>POSTER</th>
                <th>TITLE</th>
                <th>CATEGORY</th>
                <th>CREATOR</th>
                <th typeof="number">VIEWS</th>
                <th typeof="number">LECTURES</th>
                <th typeof="number">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {Courses.map((item) => (
                <TableRow
                  courseHandler={courseHandler}
                  deleteHandler={deleteHandler}
                  key={item.id}
                  item={item}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />
              ))}
            </tbody>
          </table>
          <p className="text-center mt-3">
            All Available Courses In The Database
          </p>
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;

function TableRow({
  item,
  courseHandler,
  deleteHandler,
  modalOpen,
  setModalOpen,
}) {
  const onClickModalHandler = () => {
    setModalOpen(true);
    courseHandler(item.id);
  };

  const videoDeleteHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };
  const addVideoHandler = (courseId, e, title, description, video) => {
    e.preventDefault();
    console.log(courseId);
  };



  const customStyles = {
    overlay: {
      background: "rgba(0, 0, 0, 0.8)",
      zIndex: "1000",
    },
    content: {
      top: "60%", 
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "0",
      borderRadius: "8px",
      transform: "translate(-50%, -50%)",
      minWidth: "100%", 
      maxHeight: "90%", 
      overflow: "auto", 
    },
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <img src={item.poster.url} height={50} alt="" />
      </td>
      <td>{item.title}</td>
      <td style={{ textTransform: "uppercase" }}>{item.category}</td>
      <td>{item.createdBy}</td>
      <td>{item.views}</td>
      <td>{item.lecture}</td>
      <td>
        <div>
          <button
            className="btn border-warning mx-3"
            onClick={onClickModalHandler}
          >
            View Courses
          </button>
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
          >
            <CourseModal
              setModalOpen={setModalOpen}
              id={"iehdkehdkdkd"}
              courseTitle="React Course"
              videoDeleteHandler={videoDeleteHandler}
              addVideoHandler={addVideoHandler}
            />
          </ReactModal>

          <button
            deleteHandler={deleteHandler}
            className="btn border-secondary"
            onClick={() => deleteHandler(item.id)}
          >
            {" "}
            <i className="fs-6 bi bi-trash-fill"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
