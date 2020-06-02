import React from "react";
import "./styles.css";
const drawerToggleButton = ({ toggleDrawer }) => (
  <button className="toggle-button" onClick={toggleDrawer}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
