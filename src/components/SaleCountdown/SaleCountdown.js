import React from "react";
import Products from "../Products/Products";
import "./SaleCountdown.css";
/* to enable the use of PropTypes, install the propTypes package using
npm install --save prop-types
*/
import PropTypes from "prop-types";

/* this component is called by the ProductDisplayClass component *

/* counts down by seconds the time left until the end of the sale,
and sets state of display message depending on whether the sale has finished */

class SaleCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.secondsLeft,
      saleMessage: "",
      color: this.props.color,
      price: this.props.price,
      newPrice: this.props.newPrice,
      selectedCategory: this.props.selectedCategory,
    };
  }

  displaySaleMessage() {
    this.setState({
      saleMessage: this.state.secondsLeft
        ? `10% off!! ${this.state.secondsLeft} seconds left until the end of the Sale`
        : "Sale over",
    });
  }
  componentDidMount() {
    this.countSecsId = setInterval(() => {
      this.displaySaleMessage();
      if (this.state.secondsLeft) {
        this.setState({ secondsLeft: this.state.secondsLeft - 1 });
      } else {
        this.setState({ color: "black" });
        clearInterval(this.countSecsId);
        this.render();
      }
    }, 1000);
  }

  /* passes the color of the sale items information using the state calculated above,
  to the function which will set up the products objects */

  render() {
    return (
      <div>
        <h2 id="message">{this.state.saleMessage} </h2>
        <div>
          <Products
            color={this.state.color}
            secondsLeft={this.state.secondsLeft}
            price={this.state.price}
            newPrice={this.state.newPrice}
            salesProductsIds={this.props.salesProductsIds}
            products={this.props.products}
            selectedCategory={this.state.selectedCategory}
          ></Products>
        </div>
      </div>
    );
  }
}

SaleCountdown.propTypes = {
  secondsLeft: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.number,
  selectedCategory: PropTypes.string,
};
export default SaleCountdown;
