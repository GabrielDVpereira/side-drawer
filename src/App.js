import React from "react";
import "./App.css";
import Toobar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Toobar />
      <SideDrawer />
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content</p>
      </main>
    </div>
  );
}

export default App;
