import React, { useState } from "react";
import SideNav from "./SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Test() {
  const [navOpen, setNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State to control the dropdown menu
  const [currentContent, setCurrentContent] = useState("dashboard"); // State to control the displayed content

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
            <div>
              <span className="burger-icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </div>
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
                  <a href="#">Dashboard</a>
                </div>
              )}
              {currentContent === "listCar" && (
                <div className="ListCar">
                  <p>Cars</p>
                  <a href="#">List Car</a>
                </div>
              )}
            </div>
          </>
          <div className="content">
            <h1>Welcome to our website</h1>
            <p>This is the main content of the page.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
