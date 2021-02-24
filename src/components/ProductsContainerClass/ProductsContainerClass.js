import React, { useContext } from "react";
import PropTypes from "prop-types";
import Products from "../Products/Products";
import ThemeContext from "../../contexts/ThemeContexts";

const ProductsContainerClass = (props) => {
  const {
    color,
    secondsLeft,
    salesProductsIds,
    selectedCategory,
    products,
    isSale,
    priceRange,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div className="outer-div">
      <div>
        <div>
          <div
            style={{ color: theme.foreground, background: theme.background }}
          >
            Products:
          </div>
        </div>
        <div>
          <div>
            <Products
              color={color}
              secondsLeft={secondsLeft}
              salesProductsIds={salesProductsIds}
              selectedCategory={selectedCategory}
              products={products}
              isSale={isSale}
              priceRange={priceRange}
            ></Products>
          </div>
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
  salesProductsIds: PropTypes.arrayOf(PropTypes.number),
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
