import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navBarbg">
      <div className="brandName">TechMingle</div>
      <div className="navBar">
        <div className="About">
          <Link to="/">Home </Link>
        </div>
        <div className="Gaming">
          <Link to="/Gaming">Gaming</Link>
        </div>
        <div className="Practice">
          <Link to="/Practice">Tech-frenzy</Link>
        </div>
        <div className="Podcast">
          <Link to="/Podcast">Podcast</Link>
        </div>
        <div className="Workshop">
          <Link to="/Workshop">Workshops</Link>
        </div>
        <div className="Books">
          <Link to="/Books">Books</Link>
        </div>
        <div className="Jobs">
          <Link to="/Jobs">Jobs</Link>
        </div>
        <div className="Articles">
          <Link to="/Articles">Articles</Link>
        </div>
        <div className="Clubs">
          <Link to="/Clubs">Clubs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
