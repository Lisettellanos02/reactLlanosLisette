import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";

//lo q copie del firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDe2EIoD9_DLkA0HRd4vPIMUaa6Z26KaaA",
  authDomain: "react-app-33828.firebaseapp.com",
  projectId: "react-app-33828",
  storageBucket: "react-app-33828.appspot.com",
  messagingSenderId: "14899109878",
  appId: "1:14899109878:web:6509644b4e8f0f4c28f1d7"
};
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)




function App() {
  return (
    <div className="app-body">
     
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/prueba" element={<h1>Prueba</h1>} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;