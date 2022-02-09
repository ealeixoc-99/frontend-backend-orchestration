import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  
  React.useEffect(
    () => {
      setLoading(true)
      fetch('/express_backend')
        .then((res) => res.json())
        .then((resJson) => {setCount(resJson.express)
        setLoading(false)});
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{loading === true ? (<p>Loading</p>) : ('Number of reload : '+count)}</h1>
      </header>
    </div>
  );
}

export default App;
