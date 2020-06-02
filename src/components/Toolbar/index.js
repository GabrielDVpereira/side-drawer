import React from "react";
import "./styles.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toobar = ({ toggleDrawer }) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton toggleDrawer={toggleDrawer} />
      </div>
      <div className="toolbar_logo">
        <a href="/"> THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toobar;
