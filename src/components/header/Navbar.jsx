import React from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          {/* <img src={Logo} id="logoPicture" /> */}
          <p>Turbo Pro SA</p>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Home
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                About
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/services");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Services
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Contact
              </a>
            </li>
            
          </ul>
          <div id="navBtn">
            <div id="navIcons">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-instagram"></i>
              <i class="bx bxl-twitter"></i>
            </div>
            <button type="submit">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
