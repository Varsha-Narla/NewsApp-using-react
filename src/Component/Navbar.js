import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top text-white bg-black">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            News Verse
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
                {" "}
                <Link
                  className="nav-Link text-white  p-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-white p-3" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-white p-3" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-white p-3" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-white p-3" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link text-white p-3" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-Link text-white p-3" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
