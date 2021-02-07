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

/*const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});
*/
/*this component is called by the SaleCountdown component */

class Products extends React.Component {
  state = {
    products: this.props.products,
    categories: this.props.categories,
    selectedCategory: "",
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
    console.log("products: ", this.state.products);
    console.log("num prods: ", this.state.products.length);
    /*if (this.state.products.length) {
      this.setState({
        categories: (products) =>
          Object.keys(this.groupBy(products, "category")),
      });
      console.log("In Products, products: ", this.state.products);
      console.log("number of prods in Products: ", this.state.products.length);
      console.log("categories: ", this.state.categories);
    } else {
      console.log("products array empty");
    }*/
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

  /*
  <button onClick={()=>{this.props.onAdd(this.input); this.input='';}>Select Category</button>
  */

  /* maps the array containing the shop information to set up individual products items
  and passes via to the ProductsDisplayClass which will starts the sale countdown and which calls the  */
  render() {
    return (
      <div className="product-filter">
        <div>
          <div></div>
          <div>categories are: </div>
          <div>{this.state.categories}</div>
          <select>
            <ListCategories products={this.state.products}></ListCategories>
          </select>
          <div>chosen input: {this.state.selectedCategory}</div>
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
