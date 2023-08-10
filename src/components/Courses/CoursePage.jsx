import React, { useState } from "react";
import introVideo from "../../video/intro.mp4";

const CoursePage = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  const [lectNum, setLectNum] = useState(0);

  const lectures = [
    {
      _id: "sjds",
      title: "Class 1",
      description: " Course 1 is here",
      video: {
        url: "abcd1",
      },
    },
    {
      _id: "sjds",
      title: "Class 2",
      description: " Course 2 is here",
      video: {
        url: "abcd1",
      },
    },
    {
      _id: "sjds",
      title: "Class 3",
      description: " Course 3 is here",
      video: {
        url: "abcd1",
      },
    },
    {
      _id: "sjds",
      title: "Class 3",
      description: " Course 4 is here",
      video: {
        url: "abcd1",
      },
    },
  ];

  return (
    <>
        <div className="container-fluid">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-8">
              <video
                controls
                controlsList="nodownload"
                disablePictureInPicture
                style={{ width: "100%", height: "300px" }}
              >
                <source src={introVideo} type="video/mp4" />
              </video>
              <h1>{`#${lectNum + 1} ${lectures[lectNum].title}`}</h1>
              <h3>Description </h3>
              <p>{`${lectures[lectNum].description}`}</p>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column mt-2">
                {lectures.map((item, index) => (
                  <button
                    key={item._id}
                    onClick={() => setLectNum(index)}
                    style={{ margin: 3, textDecoration: "none" }}
                  >
                    <p>
                      #{index + 1} {item.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
