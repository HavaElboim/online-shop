import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import "./SaleCountdown.css";

/* this component is called by the ProductDisplayClass component *

/* counts down by seconds the time left until the end of the sale,
and sets state of display message depending on whether the sale has finished */

const SaleCountdown = (props) => {
  const {
    color,
    secondsLeft,
    price,
    newPrice,
    selectedCategory,
    salesProductsIds,
    products,
  } = props;

  const [saleMessage, setSaleMessage] = useState("");

  useEffect(() => {
    setSaleMessage(
      secondsLeft
        ? `10% off!! ${secondsLeft} seconds left until the end of the Sale`
        : "Sale over"
    );
    /*
      countSecsId = setInterval() {
        if (secondsLeft) {
        setSecondsLeft(secondsLeft - 1 );
      } else {
        setColor("black");
        clearInterval(countSecsId);
      }
    }, 1000);
    */
  }, [secondsLeft]);

  /* passes the color of the sale items information using the state calculated above,
  to the function which will set up the products objects */

  return (
    <div>
      <h2 id="message">{saleMessage} </h2>
      <div>
        <Products
          color={color}
          secondsLeft={secondsLeft}
          price={price}
          newPrice={newPrice}
          salesProductsIds={salesProductsIds}
          products={products}
          selectedCategory={selectedCategory}
        ></Products>
      </div>
    </div>
  );
};

export default SaleCountdown;

/* class version:

class ProductsContainerClass extends React.Component {

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
