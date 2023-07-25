/*import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Saludo from './components/Saludo/Saludo';
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


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

       <ButtonComponent colorFondo="red" label="Agregar al carrito"/>
       <ButtonComponent label="Quitar del carrito"/>

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
       <Item
       img="https://i.pinimg.com/474x/2d/f0/e0/2df0e0d147e2f610c6000a1be61ceaad--medical-scrubs-nursing-scrubs.jpg"
       title="Ambo negro" 
       price={9000}
       />
       <Item
       img="https://i.pinimg.com/originals/42/c2/ee/42c2eec124c57ed3fa5006a2fa0eb337.jpg"
       title="Ambo rosa" 
       price={8500}
       />
       <Item
       img="http://http2.mlstatic.com/D_686055-MLA69342484998_052023-O.jpg"
       title="Ambo amarillo" 
       price={11000}
       />
    </div>
    </div>
  );
  }
  export default App; */



/*import React, {useState} from "react";

const App = () => {
  let [textLabel, setTextLabel]= useState("Haz click aqui")
 
  function handleChangeButton(){
    alert ("chance")
    setTextLabel("Gracias por clickear")
    console.log(textLabel);
  }
  return(
    <div>
      <Button color="red" onClick={handleChangeButton}>{textLabel}</Button>
    </div>
  );
};

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
};*/


//export default App;

//ACT FOTO creo 2 botones uno suma de a un numero y el otro resta
/*import React from "react";
import { useState } from 'react';

export default function App(){
  const[clicks, setClicks] = useState(0)

function handleClick(){
  setClicks (clicks + 1);
}
function handleClickResta(){
  if (clicks>1){ 
  setClicks (clicks - 1);
}
}
  return(
    <div>
      <h1>Clickeaste:{clicks}</h1>
      <button onClick={handleClick} style={{border: "solid 3px pink", padding: "20px"}}>
        <h1>Sumar</h1>
    </button>
   
    <button onClick={handleClickResta} style={{marginTop:"30px", border:"solid 3px blue", padding: "20px"}}>
        <h1>Restar</h1>
    </button>

    </div>
    
  );
}*/

import "./App.css";
import ItemListContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="app-body">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element= {<ItemListContainer/>} />
        <Route path="/Prueba" 
        element= {
        <h1>
          Prueba<button>Volver</button>
        </h1>
      } 
      /> 
      <Route path="/product" element= {<ItemDetailContainer/>} />
      <Route path="*" element= {<h1>Pagina no encontrada: 404</h1>} />
      </Routes>   
    </BrowserRouter>
    </div>
  );
}
export default App;


