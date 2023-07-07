import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Saludo from './components/Saludo/Saludo';


function App(){
  function calcularAlto(){
    return "200px";
  }

  const styleSaludo = {
    height: calcularAlto(),
    color: "blue",
    backgroundColor: "white",
  };

  return( 
    <div>
      <button>Click me</button>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <div style={styleSaludo} className="saludo">
        <Saludo/>
       </div>

       <ButtonComponent />

        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
  }


export default App;
