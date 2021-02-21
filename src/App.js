//for SPAP:
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//imports of pages definitions
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductInfo from "./pages/ProductInfo/ProductInfo";

//import "./utils";

//const salesProductsIds = [1, 3, 5, 6];
// import './App.css';

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
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home2</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/products/2">prod2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route exact path="/products/:product.id" component={ProductInfo}>
            <ProductInfo />
          </Route>
          <Route exact path="/products/2" component={ProductInfo}>
            <ProductInfo />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

/*
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import TodoDetails from "./pages/TodoPage/TodoPage";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/todos/:todoId" component={TodoDetails}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
*/
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
