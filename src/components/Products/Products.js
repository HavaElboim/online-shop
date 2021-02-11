import React, { useState, useEffect } from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import "./Products.css";
import PropTypes from "prop-types";

/*
componentDidMount() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => this.setState({ products }));
}
*/

const Products = (props) => {
  const {
    categories,
    selectedCategory,
    color,
    secondsLeft,
    salesProductsIds,
  } = props;

  const [products, setProducts] = useState(getProducts());

  async function getProducts() {
    let tempProducts = [];
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((tempProducts) => setProducts(tempProducts));
    console.log(tempProducts);
  }
  /*
   useEffect(() => {(
 getProducts()
   ),[]}
  // }, []); //pass empty parameter to do the fetch only once, else will keep redoing the useEffect
*/

  // maps the array containing the shop information to set up individual products items
  // and passes via to the ProductsDisplayClass which will starts the sale countdown and which calls the  */

  return (
    <div>
      {products.length > 0 && (
        <div className="product-filter">
          {products.map((product) => (
            <ProductDisplayClass
              color={color}
              secondsLeft={secondsLeft}
              title={product.title}
              image={product.image}
              price={product.price}
              productid={product.id}
              key={product.id}
              salesProductsIds={salesProductsIds}
              category={product.category}
              categories={categories}
              selectedCategory={selectedCategory}
            ></ProductDisplayClass>
          ))}
        </div>
      )}
    </div>
  );
};

Products.propTypes = {
  selectedCategory: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  secondsLeft: PropTypes.number,
  salesProductsIds: PropTypes.arrayOf(PropTypes.number),
};

/* need propTypes for products and setProducts */

export default Products;
