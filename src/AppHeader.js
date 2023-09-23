import logo from "./logo.svg";
import "./App.css";

function AppHeader() {
  return (
    <div className="App-header">
      <div className="Header">
        <a href="/">Home</a>
        {/* <h5>Основные темы для изучения библиотеки React</h5> */}
        <div className="info">Теория по библиотеке React</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default AppHeader;
