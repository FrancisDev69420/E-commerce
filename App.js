// App.js
import React, { Component } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import SearchBar from "./components/SearchBar";
import "./App.css";
import pcImage from "./pc.jpg";
import phoneImage from "./phone.jpg";
import keyboardImage from "./keyboard.jpg";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    const sampleProducts = [
      { id: 1, name: "PC", price: 50000, image: pcImage },
      { id: 2, name: "Phone", price: 25000, image: phoneImage },
      { id: 3, name: "Keyboard", price: 3000, image: keyboardImage },
    ];
    this.setState({ products: sampleProducts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      console.log("Cart updated!", this.state.cart);
    }
  }

  addToCart = (product) => {
    const updatedCart = [...this.state.cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    this.setState({ cart: updatedCart });
  };

  removeFromCart = (productId) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== productId);
    this.setState({ cart: updatedCart });
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { products, cart, searchQuery } = this.state;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <h1>E-Commerce App</h1>
        <SearchBar searchQuery={searchQuery} handleSearch={this.handleSearch} />
        <ProductList products={filteredProducts} addToCart={this.addToCart} />
        <ShoppingCart cart={cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart} />
      </div>
    );
  }
}

export default App;
