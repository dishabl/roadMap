import "./App.css";

function AppNav() {
  return (
    <>
      <div className="App-nav">
        <h4 className="themes">Темы:</h4>
        <div className="themes__link">
          <a href="/components">Components</a>
        </div>
        <div className="themes__link">
          <a href="/props">Props</a>
        </div>
        <div className="themes__link">
          <a>State</a>
        </div>
        <div className="themes__link">
          <a>Lifecycle</a>
        </div>
        <div className="themes__link">
          <a>Events</a>
        </div>
        <div className="themes__link">
          <a>Key</a>
        </div>
        <div className="themes__link">
          <a>Refs</a>
        </div>
        <div className="themes__link">
          <a>Virtual DOM</a>
        </div>
        <div className="themes__link">
          <a>Fragment</a>
        </div>
        <div className="themes__link">
          <a>React.memo</a>
        </div>
        <div className="themes__link">
          <a>useEffect</a>
        </div>
        <div className="themes__link">
          <a>Router</a>
        </div>
        <div className="themes__link">
          <a>Context</a>
        </div>
        <div className="themes__link">
          <a>Form</a>
        </div>
      </div>
    </>
  );
}

export default AppNav;
