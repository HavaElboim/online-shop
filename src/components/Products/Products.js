import React from "react";
import ProductDisplayClass from "../ProductDisplayClass/ProductDisplayClass";
import "./Products.css";
import PropTypes from "prop-types";

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

  return (
    <div>
      {products.length > 0 && (
        <div className="product-filter">
          {products.map((product) => (
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
