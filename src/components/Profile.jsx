import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Rehmat",
    email: "abc@abc.com",
    createdAt: String(new Date().toISOString()),
    cancelSubs: "Cancel Subscription",
    role: "user",
    subscription: {
      status: "notActive",
    },
    playlist: [
      {
        course: "Course2",
        poster:
          "https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      },
    ],
  };

  const deleteHandler = () => {
    console.log("deleteHandler");
  };

  

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="mx-5 text-center">Profile</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="p-4 m-4">
                <h1 style={{ fontSize: 180 }}>
                  <i className="bi bi-person-circle"></i>{" "}
                </h1>
                <button
                  className="m-4 btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#photoModal"
                >
                  Change Picture
                </button>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="p-4 m-4">
                <p>
                  <span className="fw-bold">Name : </span>
                  {user.name}
                </p>
                <p>
                  <span className="fw-bold">Email : </span>
                  {user.email}
                </p>
                <p>
                  <span className="fw-bold">Created at : </span>{" "}
                  {user.createdAt.split("T")[0]}
                </p>

                {user.role !== "admin" && (
                  <div>
                    <span className="fw-bold">Subscription :</span>
                    {user.subscription.status === "active" ? (
                      <button className="btn text-warning">
                        Cancel Subscription
                      </button>
                    ) : (
                      <Link to="/Subscribe">
                        <button className="btn btn-warning mx-2">
                          Subscribe
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
              <Link to="/Updateprofile">
                <button className="btn text-warning border-warning mx-1">
                  Update Profile
                </button>
              </Link>
              <Link to="/Changepassword">
                <button className="btn text-warning border-warning">
                  Change Password
                </button>
              </Link>
            </div>
          </div>

          <h1 className="text-center">PlayList</h1>
          {user.playlist.length > 0 && (
            <div className="row p-3 m-4">
              {user.playlist.map((item) => (
                <div className="col-md-4">
                  <h3>{item.course}</h3>
                  <img src={item.poster} style={{ width: "100%" }} alt="..." />
                  <div className="d-flex justify-content-between mt-2">
                    <Link to={`/coursePage/${item._id}`}>
                      <button className="btn text-warning border-warning">
                        Watch Now
                      </button>
                    </Link>
                    <button
                      className="btn"
                      onClick={() => deleteHandler(item.course)}
                    >
                      <i className="fs-4 bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <PhotoHandler />
      </div>
    </>
  );
};

export default Profile;

function PhotoHandler({ isOpen, onClose, imgSubmitHandler }) {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const imageSubmitHandler = (e, image) => {
    e.preventDefault();
    imgSubmitHandler(image);
    // imageSubmitHandler(e, image);
    console.log(image);
  };

  return (
    <>
       <form onSubmit={imageSubmitHandler}>
        <div
          className="modal fade"
          id="photoModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Change Picture
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {imagePrev && (
                <img
                  src={imagePrev}
                  height="300"
                  width="220"
                  alt="..."
                  style={{ marginLeft: "25%", borderRadius: "50%" }}
                />
              )}
              <div style={{ marginLeft: "25%" }}>
                <input
                  accept="image/*"
                  className=" imageInput btn"
                  type="file"
                  onChange={changeImage}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  // onClick={imageHandler}
                  className="btn btn-warning"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
