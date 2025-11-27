import React from "react";
import "./header.css";
import { FaSearch, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="nav">
      <div className="left">
        <h1 className="logo">Netflix</h1>
        <div className="links">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
          <p>Browse by Languages</p>
        </div>
      </div>
      <div className="right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Header;
