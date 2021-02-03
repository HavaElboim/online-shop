import React from "react";
import HeaderClass from "./components/HeaderClass/HeaderClass";
import ProductsContainerClass from "./components/ProductsContainerClass/ProductsContainerClass";

//const salesProductsIds = [1, 3, 5, 6];
// import './App.css';

// import shuki, {arr1} from './efrat.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      secondsLeft: 15,
      price: 0,
      newPrice: "",
      salesProductsIds: [1, 3, 5, 6],
    };
  }

  render() {
    return (
      <div>
        <HeaderClass />
        <ProductsContainerClass
          color={this.state.color}
          secondsLeft={this.state.secondsLeft}
          price={this.state.price}
          newPrice={this.state.newPrice}
          salesProductsIds={this.state.salesProductsIds}
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
