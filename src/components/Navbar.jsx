import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://images.sftcdn.net/images/t_app-icon-m/p/63b2f423-57bd-4192-9c3e-15f5ad1d445c/4012219882/wordmania-guess-the-word-logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  {props.about}
                </NavLink>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
