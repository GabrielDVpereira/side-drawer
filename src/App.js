import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Toobar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  function toggleDrawer() {
    console.log("toggle drawer");
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdrop = useRef(null);

  if (sideDrawerOpen) {
    backdrop.current = <Backdrop toggleDrawer={toggleDrawer} />;
  } else {
    backdrop.current = null;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toobar toggleDrawer={toggleDrawer} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop.current}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
