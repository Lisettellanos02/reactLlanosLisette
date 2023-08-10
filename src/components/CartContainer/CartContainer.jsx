import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
  const navigate = useNavigate();
  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: { name: "Santiago", email: "santi@mail.com", phone: "123123123" },
      date: new Date(),
      total: 1500, 
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Gracias por tu compra, tu numero de orden es ${idOrder}`);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {console.log(item.id)}
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar{item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}
      <br />
      <div>Total de la compra: $999</div>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
}

export default CartContainer;