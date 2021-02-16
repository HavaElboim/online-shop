import React from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import "./Products.css";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import ProductInfo from "../../pages/ProductInfo/ProductInfo";

const Products = (props) => {
  const {
    color,
    secondsLeft,
    salesProductsIds,
    selectedCategory,
    products,
  } = props;

  // maps the array containing the shop information to set up individual products items
  // and passes via to the ProductsDisplayClass which will starts the sale countdown and which calls the  */
  /*
 <Link to={`/ProductInfo/${product.id}`} key={product.id}>
                Details
              </Link>
              <Route
                path="/ProductInfo/:product.id"
                component={ProductInfo}
                key={product.id}
              ></Route>
              */
  return (
    <div>
      {products.length > 0 && (
        <div className="product-filter">
          {products.map((product) => (
            <div>
              <Link to={`/ProductInfo/${product.id}`}>Details</Link>
              <Route
                path={`/ProductInfo/:${product.id}`}
                component={ProductInfo}
                key={product.id}
              ></Route>
              <ProductDisplayClass
                color={color}
                secondsLeft={secondsLeft}
                salesProductsIds={salesProductsIds}
                selectedCategory={selectedCategory}
                title={product.title}
                image={product.image}
                price={product.price}
                productid={product.id}
                category={product.category}
                key={product.id}
              ></ProductDisplayClass>
            </div>
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
