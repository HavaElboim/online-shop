import React, { useState, useEffect, useContext } from "react";

//components of content:
import Header from "../../components/Header/Header";
import ProductsContainerClass from "../../components/ProductsContainerClass/ProductsContainerClass";

//for theme context:
import ThemeContext from "../../contexts/ThemeContexts";

const Home = () => {
  const [color] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(65);
  const [salesProductsIds] = useState([1, 3, 5, 6]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [isSale, setSale] = useState("true");
  const [priceRange, setPriceRange] = useState([0, 200]);

  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme.light);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
      });
    console.log("fetched ");
  }, []);

  return (
    <div
      style={{ color: currentTheme.color, background: currentTheme.background }}
    >
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        products={products}
        isSale={isSale}
        setSale={setSale}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      ></Header>
      <ProductsContainerClass
        color={color}
        secondsLeft={secondsLeft}
        salesProductsIds={salesProductsIds}
        selectedCategory={selectedCategory}
        products={products}
        isSale={isSale}
        priceRange={priceRange}
      ></ProductsContainerClass>
    </div>
  );
};

export default Home;

/*
 */
