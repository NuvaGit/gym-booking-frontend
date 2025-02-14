import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://www.clipartmax.com/png/middle/184-1848796_ucd-brandmark-colour-university-college-dublin.png" alt="UCD Logo" />
      </div>
      <h1 className="title">UCD Gym Booking</h1>
      <div className="menu">
        <Link to="/book-gym" className="bookGym">📅 Book Gym</Link>
      </div>
    </nav>
  );
};
