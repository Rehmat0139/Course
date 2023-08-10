import { Trash } from "lucide-react";
import React, { useState } from "react";
import { CloseButton, ModalBody, ModalTitle } from "react-bootstrap";

const CourseModal = ({
  setModalOpen,
  id,

  videoDeleteHandler,
  addVideoHandler,
  courseTitle,
  lecture = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const handleVideoInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setVideoPrev(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setVideo(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideoHandler(e, id, inputTitle, description, video);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <ModalTitle className="text-muted">{courseTitle} </ModalTitle>
        <button
          className="btn border-warning mx-3"
          onClick={() => setModalOpen(false)}
        >
          <CloseButton />
        </button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ModalBody className="container-fluid">
              <div className="d-flex flex-column p-3">
                <h5>{courseTitle}</h5>
                <p>{`#${id}`}</p>
              </div>
              <ModalBody>
                <h4>Lectures</h4>
                {lecture.map((item, i) => (
                  <CourseVideoCard
                    key={i}
                    title={courseTitle}
                    num={i + 1}
                    description="Full reactJS course"
                    lectureId="abcdef"
                    courseTitle="React Courses"
                    courseId={id}
                    handleVideoInputChange={handleVideoInputChange}
                    addVideoHandler={addVideoHandler}
                    videoDeleteHandler={videoDeleteHandler}
                  />
                ))}
              </ModalBody>
            </ModalBody>
          </div>
          <div className="col-md-4">
            <p className="fw-bold fs-5 text-center">ADD LECTURE</p>

            <form
              className="form-outline p-3"
              style={{ border: "1px solid red " }}
              onSubmit={handleSubmit}
            >
              <div className="d-flex flex-column">
                <div className="form-outline mb-2">
                  <input
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                    id="title"
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-2">
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                    id="description"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="file"
                    accept="video/mp4"
                    onChange={handleVideoInputChange}
                  />
                </div>
                {videoPrev && (
                  <video
                    src={videoPrev}
                    controls
                    controlsList="nodownload"
                  ></video>
                )}
                <button className="btn border-danger mt-2" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseModal;

function CourseVideoCard({
  title,
  description,
  lectureId,
  courseId,
  videoDeleteHandler,
  num,
}) {
  return (
    <div className="container-fluid p-2 ">
      <div className="row d-flex">
        <div className="col-md-12">
          <div
            className="d-flex justify-content-between p-3"
            style={{ lineHeight: "10px" }}
          >
            <div className="d-flex flex-column">
              <p className="fw-bold">{`#${num} ${title}`}</p>
              <p>{description}</p>
            </div>
            <div className="pt-2">
              <button
                className="btn btn-dark"
                onClick={() => videoDeleteHandler(courseId, lectureId)}
              >
                <Trash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
