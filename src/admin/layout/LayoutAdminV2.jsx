import React, { useState } from "react";
import "../layout/layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, ScrollRestoration, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../component/Breadcrumbs";

function LayoutAdminV2() {
  const [navOpen, setNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to control the dropdown menu
  const [currentContent, setCurrentContent] = useState("dashboard"); // State to control the displayed content
  const navigate = useNavigate();
  const handleCarBoxClick = () => {
    navigate("/listcar");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleHomeClick = () => {
    setCurrentContent("dashboard");
  };

  const handleCarsClick = () => {
    setCurrentContent("listCar");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log("Search submitted");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
    setToken("");
  };

  return (
    <>
      <div className="background">
        <div className="topnav">
          <div className="left-nav">
            <img
              className="top-icon"
              style={{ width: "100px", height: "34px" }}
              src="../src/assets/Rectangle 62.png"
            />
          </div>
          <div className="right-nav">
            <span className="burger-icon" onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </span>

            <div className="right-side">
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="search-button-wrap">
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </div>
              </form>
              <div className="dropdown">
                <span className="colored-circle">A</span>
                <span>Customer</span>
                <div className="dropdown-content">
                  <a onClick={handleLogout}>Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <>
            <div className="sidebar">
              <div className="rec-icon">
                <img
                  className="rectangle"
                  style={{ width: "34px" }}
                  src="../src/assets/Rectangle 63.png"
                  onClick={toggleNav}
                />
              </div>

              <div className="home-icon" onClick={handleHomeClick}>
                <span>
                  <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
                </span>
                <p>Dashboard</p>
              </div>

              <div className="cars-icon" onClick={handleCarsClick}>
                <span>
                  <FontAwesomeIcon icon={faCar} style={{ color: "white" }} />
                </span>
                <p>Cars</p>
              </div>
            </div>

            <div className={`sidenav ${navOpen ? "open" : ""}`}>
              {currentContent === "dashboard" && (
                <div className="Dashboard">
                  <p>Dashboard</p>
                  <a onClick={handleDashboard}>Dashboard</a>
                </div>
              )}
              {currentContent === "listCar" && (
                <div className="ListCar">
                  <p>Cars</p>
                  <a onClick={handleCarBoxClick}>List Car</a>
                </div>
              )}
            </div>
          </>
          <div className="content">
            <main>
              <Breadcrumbs />
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutAdminV2;
