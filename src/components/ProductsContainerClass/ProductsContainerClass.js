import React from "react";
import SaleCountdown from "../SaleCountdown/SaleCountdown";
import PropTypes from "prop-types";

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

ProductsContainerClass.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  selectedCategory: PropTypes.string,
};

export default ProductsContainerClass;
