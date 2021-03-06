import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../../App.css';


export default () => {
  const location = useLocation();

  return (
    <header>
      <Link className="navbar-brand" to="/bullock-portfolio-react">
          <h1 className="bg-info text-white">Brianna Bullock</h1>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/bullock-portfolio-react" className={location.pathname === "/bullock-portfolio-react" ? "nav-link active" : "nav-link"} ><div className="heart-shape"></div>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/bullock-portfolio"
            className={location.pathname === "/bullock-portfolio" ? "nav-link active" : "nav-link"} > <div className="heart-shape"></div>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/bullock-contact"
            className={location.pathname === "/bullock-contact" ? "nav-link active" : "nav-link"} > <div className="heart-shape"></div>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}


