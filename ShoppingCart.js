// components/ShoppingCart.js
import React from "react";

const ShoppingCart = ({ cart, removeFromCart, clearCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (

    <div>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? <p>Cart is empty.</p> : (
        <div>

          {cart.map((item) => (

            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ₱{item.price} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            
          ))}

          <h3>Total: ₱{totalPrice}</h3>
          <button onClick={clearCart}>Clear Cart</button>

        </div>

      )}

    </div>

  );

};

export default ShoppingCart;
