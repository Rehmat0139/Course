import { Eye, LayoutDashboard, PlusCircle, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="container d-flex flex-column "
      style={{
        boxShadow: "-2px 0 10px rgba(107,70,200,0.4)",
        minHeight: "100vh",
        textAlign: "center",
       }}
    >
      <Link to="/admin/dashboard">
        <button className="btn text-warning border-warning my-3">
          <LayoutDashboard strokeWidth={2} /> Dashboard
        </button>
      </Link>
      <Link to="/admin/createcourses">
        <button className="btn text-warning border-warning my-3">
          <PlusCircle /> Create Course
        </button>
      </Link>
      <Link to="/admin/admincourses">
        <button className="btn text-warning border-warning my-3">
          <Eye strokeWidth={2} /> Courses
        </button>
      </Link>
      <Link to="/admin/users">
        <button className="btn text-warning border-warning my-3">
          <User strokeWidth={2} /> Users
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
