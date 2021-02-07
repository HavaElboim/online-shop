import React from "react";
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
  /*
  componentDidMount() {
    this.setState({
      categories: Object.keys(groupBy(this.state.products, "category")),
    });
  }*/

  listCategories = (products) => {
    /*this.setState({ categories: (products) => groupBy(products, "category") });*/
    this.setState({
      categories: (products) => Object.keys(groupBy(products, "category")),
    });
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
  /*
  state = { todos: [] };
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      userId: 0,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [newTodo, ...todos] }));
  };
  render() {
    return (
      <div>
        <AddTodo onAdd={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }
  */
}

export default App;
