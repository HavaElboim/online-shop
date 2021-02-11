import React, { useState, useEffect } from "react";
import "./ProductDisplayClass.css";
import PropTypes from "prop-types";
import sale from "./sale.png";

/* this component is called from the Products class.
   It renders individual products cards (product title, image, price).
   If the product is a sale item, its title and sale price are colored until the sale ends 
   */

const ProductDisplayClass = (props) => {
  const {
    color,
    secondsLeft,
    title,
    image,
    price,
    productid,
    salesProductsIds,
    category,
    selectedCategory,
  } = props;

  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    if (secondsLeft > 0 && salesProductsIds.includes(productid)) {
      setNewPrice(` Sale: $ ${+(price * 0.9).toFixed(2)}`);
    } else {
      setNewPrice("");
    }
  }, [price, salesProductsIds, secondsLeft, newPrice, productid]);

  /* renders an individual product card, containing product information and image.
  the information an image are obtained from the props which are passed from the ProductsContainerClass */

  return (
    (!selectedCategory || category === selectedCategory) && (
      <div className="product-card">
        <div className="product-info">
          {newPrice && secondsLeft ? (
            <img src={sale} alt="sale item"></img>
          ) : null}
          <h6
            style={{
              color: newPrice ? color : "black",
            }}
          >
            {title}
          </h6>
        </div>
        <div className="product-image">
          <img src={image} alt={""} />
        </div>
        <div className="product-info">
          <h5>$ {price}</h5>
          <h5
            style={{
              color: color,
              display: newPrice ? "none" : "block",
            }}
          >
            {newPrice}
          </h5>
        </div>
      </div>
    )
  );
};

ProductDisplayClass.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  selectedCategory: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  salesProductsIds: PropTypes.number,
  category: PropTypes.string,
};

export default ProductDisplayClass;
