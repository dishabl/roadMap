import "./App.css";
import { Routes, Route } from "react-router-dom";
import Components from "./themes/Components";
import Props from "./themes/Props";
import Home from "./Home";

function AppContent() {
  return (
    <>
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="props" element={<Props />} />
          <Route path="components" element={<Components />} />
        </Routes>
      </div>
    </>
  );
}

export default AppContent;
