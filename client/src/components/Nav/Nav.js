import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <ul>
  <li
          className={
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li
        className={
          window.location.pathname === "/save"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/save" className="nav-link">
          Save
        </Link>
      </li>
        </ul>
  </nav>
);

export default Nav;
