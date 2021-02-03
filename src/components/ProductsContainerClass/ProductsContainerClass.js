import React from "react";
import SaleCountdown from "../SaleCountdown/SaleCountdown";

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
            ></SaleCountdown>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsContainerClass;
