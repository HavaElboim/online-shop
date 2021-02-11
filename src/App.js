import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProductsContainerClass from "./components/ProductsContainerClass/ProductsContainerClass";
//import "./utils";

//const salesProductsIds = [1, 3, 5, 6];
// import './App.css';

// import shuki, {arr1} from './efrat.js'

/* App calls ProductsContainerClass
  which calls SaleCountdown
  which calls Products
  which calls ListCategories, and also calls ProductDisplayClass.
  ProductDisplayClass renders each product seperately in a product card.
  Products maps the array containing the shop information into separate items each containing info of one product.

Header calls SaleCountdown component which counts the time until end of sale and sets the Sale Message in the Header
Header also calls CategorySelect component to choose products filter. 
  */
const App = () => {
  //const [color, setColor] = useState("red");
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

  console.log("prod are ", products);

  return (
    <div>
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

export default App;

/*
version using classes:

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      secondsLeft: 15,
      price: 0,
      newPrice: "",
      salesProductsIds: [1, 3, 5, 6],
      categories: [],
      selectedCategory: "",
      products: [],
    };
  }

  listCategories = (products) => {
    this.setState({
      categories: (products) => Object.keys(groupBy(products, "category")),
    });
 
    this.setState({ categories: ["Select...", ...this.state.categories] });
  };

  render() {
    return (
      <div>
        <HeaderClass
          categories={this.state.categories}
          selectedCategory={this.state.selectedCategory}
          products={this.state.products}
          listCategories={this.listCategories}
        ></HeaderClass>
        <ProductsContainerClass
          color={this.state.color}
          secondsLeft={this.state.secondsLeft}
          price={this.state.price}
          newPrice={this.state.newPrice}
          salesProductsIds={this.state.salesProductsIds}
          selectedCategory={this.state.selectedCategory}
          listCategories={this.listCategories}
          products={this.state.products}
        >
          Some child
        </ProductsContainerClass>
      </div>
    );
  }
}
*/
