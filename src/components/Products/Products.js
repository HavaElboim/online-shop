import React from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import ListCategories from "../ListCategories/ListCategories";
import "./Products.css";
import PropTypes from "prop-types";

//attempts to import gist file:
//import "../../utils";
// to call function groupBy from the file ../../utils.js,
// see documentation on:
// "react call function defined in parent component"

//import ReactEmbedGist from 'react-embed-gist';
//import Gist from "react-gist";
//or:
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
          {this.state.products.length > 0 && (
            <select
              id="selectCat"
              value={this.state.selectedCategory}
              onChange={this.handleChange}
            >
              <option value="">All Products</option>
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
              productid={product.id}
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

Products.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  newPrice: PropTypes.string,
  selectedCategory: PropTypes.string,
  salesProductsIds: PropTypes.arrayOf(PropTypes.number),
};

export default Products;
