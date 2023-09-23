import React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import RoutingPage from "./RoutingPage";

function App() {
  return (
    <div className="App">
      <div className="App-content"></div>
      <AppHeader />
      <AppMain />
      <RoutingPage />
    </div>
  );
}

export default App;
