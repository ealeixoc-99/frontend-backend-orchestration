import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(null);
  
  React.useEffect(
    () => {
      fetch('/express_backend')
        .then((res) => res.json())
        .then((resJson) => setCount(resJson.express));
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Number of reload : {count}</h1>
      </header>
    </div>
  );
}

export default App;
