import React from "react";
import "./styles.css";

const Backdrop = ({ toggleDrawer }) => (
  <div className="backdrop" onClick={toggleDrawer} />
);

export default Backdrop;
