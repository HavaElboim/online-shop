import React from "react";
import SaleCountdown from "../SaleCountdown/SaleCountdown";
import PropTypes from "prop-types";

const ProductsContainerClass = (props) => {
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
        <div>
          <SaleCountdown
            color={props.color}
            secondsLeft={props.secondsLeft}
            price={props.price}
            selectedCategory={props.selectedCategory}
            salesProductsIds={props.salesProductsIds}
            products={props.products}
          ></SaleCountdown>
        </div>
      </div>
    </div>
  );
};

ProductsContainerClass.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  selectedCategory: PropTypes.string,
};

export default ProductsContainerClass;

/* class form:

class ProductsContainerClass extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
          <div>
            <SaleCountdown
              secondsLeft={this.props.secondsLeft}
              color={this.props.color}
              price={this.props.price}
              newPrice={this.props.newPrice}
              salesProductsIds={this.props.salesProductsIds}
              products={this.props.products}
              selectedCategory={this.props.selectedCategory}
            ></SaleCountdown>
          </div>
        </div>
      </div>
    );
  }
}
*/
