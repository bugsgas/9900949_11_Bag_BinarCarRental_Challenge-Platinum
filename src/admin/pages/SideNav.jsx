import React, { useState } from "react";
import "../pages/test.css";

function SideNav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      {" "}
      <button className="toggle-button" onClick={toggleNav}>
        ☰
      </button>
      <div className={`sidenav ${navOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}

export default SideNav;
