import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App"; // Adjust the path based on your project structure

const Navbar = () => {
  const { savedArticles } = useContext(AppContext);

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
                <Link
                  className="nav-Link text-white  p-3"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link text-white p-3"
                  to="/saved"
                >
                  Saved Articles ({savedArticles.length})
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
