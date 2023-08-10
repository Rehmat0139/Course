import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

function NavScroll() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isAuthenticated = true;
  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    console.log("logout");
  };

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <Navbar
      className={`sticky-top d-flex flex-column ${isNavOpen ? "nav-open" : ""}`}
      bg="light"
      expand="lg"
    >
      <Container fluid d-flex>
        <Navbar.Brand href="#">
          <Link
            className="nav-link active p-3 align-text-center"
            aria-current="page"
            to="/"
          >
            <span className="h1 fs-4 fw-bold logoText">COURSESSTACK</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleNavToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`nav-style me-auto my-2 my-lg-0 fs-6 fw-bold col-sm-12 col-md-8 justify-content-between ${
              isNavOpen ? "nav-links-open" : ""
            }`}
            navbarScroll
          >
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/"
              onClick={handleNavToggle}
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/Courses"
              onClick={handleNavToggle}
            >
              Browse-all-course
            </Link>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/Request"
              onClick={handleNavToggle}
            >
              Request-a-course
            </Link>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/Contact"
              onClick={handleNavToggle}
            >
              Contact us
            </Link>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="/about"
              onClick={handleNavToggle}
            >
              About us
            </Link>
          </Nav>

          {isAuthenticated ? (
            <>
              <Link
                to="/Profile"
                style={{ textDecoration: "none" }}
                onClick={handleNavToggle}
              >
                <Button className="me-md-2 d-block border-warning bg-warning">
                  Profile
                </Button>
              </Link>
              <Link to='/Login'>
                <Button
                  className="me-md-2 d-block border-secondary bg-secondary m-3"
                  onClick={logoutHandler}
                >
                  <i className="bi bi-box-arrow-left" style={{ margin: 4 }}></i>
                  Log-out
                </Button>
              </Link>

              {user && user.role === "admin" && (
                <Link to="/admin/dashboard" onClick={handleNavToggle}>
                  <Button className="btn-dash btn-primary">
                    <i className="bi bi-laptop"></i>
                    <span className="dashboard d-none">Dashboard</span>
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link
                to="/Login"
                style={{ textDecoration: "none" }}
                onClick={handleNavToggle}
              >
                <Button className="me-md-2 d-block border-warning bg-warning">
                  Log-in
                </Button>
              </Link>
              <p style={{ margin: 4 }}>OR</p>
              <Link
                to="/Signup"
                style={{ textDecoration: "none" }}
                onClick={handleNavToggle}
              >
                <Button className="me-md-2 d-block border-warning bg-warning">
                  Sign-up
                </Button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
