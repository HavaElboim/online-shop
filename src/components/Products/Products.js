import React from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import ListCategories from "../ListCategories/ListCategories";
import "./Products.css";
//import "../../utils";
// to call function groupBy from the file ../../utils.js,
// see documentation on:
// "react call function defined in parent component"

//import ReactEmbedGist from 'react-embed-gist';
//import Gist from "react-gist";

/*this component is called by the SaleCountdown component */

class Products extends React.Component {
  state = {
    products: this.props.products,
    categories: this.props.categories,
    selectedCategory: this.props.selectedCategory,
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
  }

  /* could include the gist like this:
  <script src="https://gist.github.com/eladcandroid/7b83954ecd13e9eb705a2f82309dc4e1.js"></script>
  if use the 
  import ReactEmbedGist from 'react-embed-gist';

  but instead I use the
  import Gist from "react-gist";
  above and then include the gist using the format:
  <div>
     <Gist id='f824ffb7bafec535d0b6452179f2d790' file='java-file' />
 </div>
 */

  /* maps the array containing the shop information to set up individual products items
  and passes via to the ProductsDisplayClass which will starts the sale countdown and which calls the  */

  clearSelection = () => {
    this.setState({ selectedCategory: "" });
  };

  handleChange = (event) => {
    this.setState({
      selectedCategory: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <span>What do you want to buy? </span>
          {this.state.products.length && (
            <select
              id="selectCat"
              value={this.state.selectedCategory}
              onChange={this.handleChange}
            >
              <ListCategories products={this.state.products}></ListCategories>
            </select>
          )}
          <button onClick={this.clearSelection}>Clear Choice</button>
        </div>
        <div className="product-filter">
          {this.state.products.map((product) => (
            <ProductDisplayClass
              color={this.props.color}
              secondsLeft={this.props.secondsLeft}
              title={product.title}
              image={product.image}
              price={product.price}
              newPrice={this.state.newPrice}
              id={product.id}
              key={product.id}
              salesProductsIds={this.props.salesProductsIds}
              category={product.category}
              selectedCategory={this.state.selectedCategory}
            ></ProductDisplayClass>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;

/* experimental:

componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
    this.setState({
      categories: 
        groupBy(this.state.products, "category")
      ),
    });
    console.log(this.state.categories);
  }

 render() {
    return (
      <div className="product-filter">
        <div>
          <div></div>
          <div>categories are: </div>
          <div>{this.categories}</div>
          <div>chosen input: {this.state.selectedCategory}</div>
          <select id="dropdown">
            <ListCategories
              selectCategory={this.props.listCategories}
              products={this.state.products}
              categories={this.state.categories}
            />
          </select>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ selectedCategory: e.target.value })
            }
            value={this.state.selectedCategory}
          ></input>
          <button
            onClick={() => {
              this.props.selectCategory(
                this.state.products,
                this.state.selectedCategory
              );
              this.input = "";
            }}
          >
            Select Category
          </button>
        </div>
        {this.state.products.map((product) => (
          <ProductDisplayClass
            color={this.props.color}
            secondsLeft={this.props.secondsLeft}
            title={product.title}
            image={product.image}
            price={product.price}
            newPrice={this.state.newPrice}
            id={product.id}
            key={product.id}
            salesProductsIds={this.props.salesProductsIds}
            category={product.category}
          ></ProductDisplayClass>
        ))}
      </div>
    );
  }
}
*/
