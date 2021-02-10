import React, { useState } from "react";
import HeaderClass from "./components/HeaderClass/HeaderClass";
import ProductsContainerClass from "./components/ProductsContainerClass/ProductsContainerClass";
import "./utils";

//const salesProductsIds = [1, 3, 5, 6];
// import './App.css';

// import shuki, {arr1} from './efrat.js'

/*reduce:
 *
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 *
 * xs = name of array
 * (rv,x) => arrow fn passed to reduce
 * rv = The initialValue, or the previously returned value of the function
 *
 * The reduce() method reduces the array to a single value.
 * The reduce() method executes a provided function for each value of the array (from left-to-right).
 * The return value of the function is stored in an accumulator (result/total).
 * Note: reduce() does not execute the function for array elements without values.
 * Note: This method does not change the original array.
 *
 * Call this function with xs as the list of products and key as "category"
 */
const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

/* App calls ProductsContainerClass
  which calls SaleCountdown
  which calls Products
  which calls ListCategories, and also calls ProductDisplayClass.
  ProductDisplayClass renders each product seperately in a product card.
  Products maps the array containing the shop information into separate items each containing info of one product.


  */
const App = () => {
  //const [color, setColor] = useState("red");
  const [color] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [price, setPrice] = useState(0);
  const [salesProductsIds, setSalesProductsIds] = useState([1, 3, 5, 6]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  const listCategories = (products) => {
    this.setState({
      categories: (products) => Object.keys(groupBy(products, "category")),
    });
  };

  return (
    <div>
      <HeaderClass
        categories={categories}
        selectedCategory={selectedCategory}
        products={products}
        listCategories={listCategories}
      ></HeaderClass>
      <ProductsContainerClass
        color={color}
        secondsLeft={secondsLeft}
        price={price}
        setPrice={setPrice}
        salesProductsIds={salesProductsIds}
        selectedCategory={selectedCategory}
        listCategories={listCategories}
        products={products}
      >
        Some child
      </ProductsContainerClass>
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
