import React from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import "./Products.css";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
  }

  render() {
    return (
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
          ></ProductDisplayClass>
        ))}
      </div>
    );
  }
}

export default Products;
