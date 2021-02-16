import React, { useState, useEffect } from "react";

//for SPAP:
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components of content:
import Header from "../../components/Header/Header";
import ProductsContainerClass from "../../components/ProductsContainerClass/ProductsContainerClass";

const Home = () => {
  const [color] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(65);
  const [salesProductsIds] = useState([1, 3, 5, 6]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
      });
    console.log("fetched ");
  }, []);

  console.log("prods are ", products);

  return (
    <div>
      <h2>Home</h2>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        products={products}
      ></Header>
      <ProductsContainerClass
        color={color}
        secondsLeft={secondsLeft}
        salesProductsIds={salesProductsIds}
        selectedCategory={selectedCategory}
        products={products}
      ></ProductsContainerClass>
    </div>
  );
};

export default Home;

/*
 */
