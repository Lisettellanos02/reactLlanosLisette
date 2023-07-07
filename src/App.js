import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Saludo from './components/Saludo/Saludo';
import Item from './components/Item/Item';


function App(){
  function calcularAlto(){
    return "200px";
  }

  const styleSaludo = {
    height: calcularAlto(),
    color: "black",
    backgroundColor: "purple",
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

       <ButtonComponent colorFondo="red" label="Boton 1"/>
       <ButtonComponent label="Otro boton"/>

      </header>
      <Item
       img="https://http2.mlstatic.com/D_NQ_NP_616028-MLA31040337579_062019-W.jpg"
       title="Ambo rojo" 
       price={12500}
       />
       <Item
       img="http://mla-s1-p.mlstatic.com/843559-MLA41421157195_042020-O.jpg"
       title="Ambo lila" 
       price={9000}
       />
       <Item
       img="https://http2.mlstatic.com/D_NQ_NP_862349-MLA31115409909_062019-W.jpg"
       title="Ambo azul" 
       price={8500}
       />
    </div>
    </div>
  );
  }


export default App;
