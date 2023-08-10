import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Side = () => {
  // const [content, setContent] = useState(false);
  const [side, setSide] = useState(true);
  return (
    <>
      <nav
      style={{height: '60vh'}}
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <button
          className={`${
            side
              ? `fw-bold fs-5 me-md-2 `
              : `fw-bold fs-5 me-md-2 d-none `
          }`}
          onclick={() => setSide(!side)}
        >
          ☰
        </button>
        {/* <Link
          className="nav-link active p-3 align-text-center"
          aria-current="page"
          href="/"
        >
          <a className="navbar-brand logo" href="/">
            <span className="h1 fs-4 fw-bold logoText">C</span>
            <span className="h1 fs-4 fw-bold logoText">O</span>
            <span className="h1 fs-4 fw-bold logoText">U</span>
            <span className="h1 fs-4 fw-bold logoText">R</span>
            <span className="h1 fs-4 fw-bold logoText">S</span>
            <span className="h1 fs-4 fw-bold logoText">E</span>
            <span className="h1 fs-4 fw-bold logoText">S</span>
            <span className="h1 fs-4 fw-bold logoText">T</span>
            <span className="h1 fs-4 fw-bold logoText">A</span>
            <span className="h1 fs-4 fw-bold logoText">C</span>
            <span className="h1 fs-4 fw-bold logoText">K</span>
          </a>
        </Link> */}
        <div className={`${side ? `d-block` : `d-none` }`} >
          <div class="list-group list-group-flush mx-3 mt-4">
            <Link
              href="/"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Home</span>
            </Link>
            <Link
              href="/"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Browse-all-course</span>
            </Link>

            <Link
              href="/"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Request-a-course</span>
            </Link>
            <Link
              href="/"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>Contact us</span>
            </Link>
            <Link
              href="/"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-bar fa-fw me-3"></i>
              <span>About us</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Side;
