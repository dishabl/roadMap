import React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

function App() {
  return (
    <div className="App">
      <div className="App-content"></div>
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default App;
