import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="row">
          <ul className="navbar-nav">
            <li className="nav-item mt-1">
              <Link className="navbar-brand p-3" to="/">
                Google Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                {" "}
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
