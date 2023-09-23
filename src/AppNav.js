import "./App.css";
import { Link } from "react-router-dom";

function AppNav() {
  return (
    <>
      <div className="App-nav">
        <h4 className="themes">Темы:</h4>
        <div className="themes__link">
          <Link to="/components">Components</Link>
          {/* <a href="/components">Components</a> */}
        </div>
        <div className="themes__link">
          <Link to="/props">Props</Link>
        </div>
        <div className="themes__link">
          <Link>State</Link>
        </div>
        <div className="themes__link">
          <Link>Lifecycle</Link>
        </div>
        <div className="themes__link">
          <Link>Events</Link>
        </div>
        <div className="themes__link">
          <Link>Key</Link>
        </div>
        <div className="themes__link">
          <Link>Refs</Link>
        </div>
        <div className="themes__link">
          <Link>Virtual DOM</Link>
        </div>
        <div className="themes__link">
          <Link>Fragment</Link>
        </div>
        <div className="themes__link">
          <Link>React.memo</Link>
        </div>
        <div className="themes__link">
          <Link>useEffect</Link>
        </div>
        <div className="themes__link">
          <Link>Router</Link>
        </div>
        <div className="themes__link">
          <Link>Context</Link>
        </div>
        <div className="themes__link">
          <Link>Form</Link>
        </div>
      </div>
    </>
  );
}

export default AppNav;
