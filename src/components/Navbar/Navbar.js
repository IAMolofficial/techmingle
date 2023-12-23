import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navBarbg">
      <div className="brandName">TechMingle</div>
      <div className="navBar">
        <div className="About">
          <Link to="/"><box-icon name='joystick' animation='tada' ></box-icon>Home </Link>
        </div>
        <div className="Gaming">
          <Link to="/Gaming"><box-icon name='joystick' animation='tada' ></box-icon>Gaming</Link>
        </div>
        <div className="Practice">
          <Link to="/Practice"><box-icon name='joystick' animation='tada' ></box-icon>Tech Practice</Link>
        </div>
        <div className="Podcast">
          <Link to="/Podcast"><box-icon name='joystick' animation='tada' ></box-icon>Podcast</Link>
        </div>
        <div className="Workshop">
          <Link to="/Workshop"><box-icon name='joystick' animation='tada' ></box-icon>Workshops</Link>
        </div>
        <div className="Books">
          <Link to="/Books"><box-icon name='joystick' animation='tada' ></box-icon>Books</Link>
        </div>
        <div className="Jobs">
          <Link to="/Jobs"><box-icon name='joystick' animation='tada' ></box-icon>Jobs</Link>
        </div>
        <div className="Articles">
          <Link to="/Articles"><box-icon name='joystick' animation='tada' ></box-icon>Articles</Link>
        </div>
        <div className="Clubs">
          <Link to="/Clubs"><box-icon name='joystick' animation='tada' ></box-icon>Clubs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
