import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./themes/Components";
import Props from "./themes/Props";
import Home from "./Home";

function AppContent() {
  return (
    <>
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="props" element={<Props />} />
            <Route path="components" element={<Components />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default AppContent;
