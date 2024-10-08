import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/images/logos/logoNav.png"
              alt="One Team Foundation"
            />
          </Link>
          <ul className="nav">
            <li>
              <Link to="/our-founder">Our Founder</Link>
            </li>
            <li>
              <Link to="/our-mission">Our Mission</Link>
            </li>
            <li>
              <Link to="/our-projects">Our Projects</Link>
            </li>
            <li>
              <Link to="/">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/entertainment">ArtsMusicSportsWShop</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/companies-support">Partner Companies</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
