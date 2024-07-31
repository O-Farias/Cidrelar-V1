import React from "react";
import MainProduct from "./components/MainProduct";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  const productInfo = {
    image: "../assets/images/product1.jpg",
    title: "Produto em Destaque",
    price: "R$2.000,00",
  };

  return (
    <div>
      <NavBar />
      <MainProduct {...productInfo} />
    </div>
  );
}

export default App;
