import React from "react";

const ClearCart = ({ clearCart }) => {
  return (
    <div>
      <button onClick={clearCart} style={styles.button}>
        Clear Cart
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ClearCart;

