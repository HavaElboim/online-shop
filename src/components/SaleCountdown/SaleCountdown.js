import React from "react";
import Products from "../Products/Products";

class SaleCountdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.secondsLeft,
      saleMessage: "",
      color: this.props.color,
      price: this.props.price,
      newPrice: this.props.newPrice,
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
        <h3>{this.state.saleMessage} </h3>
        <div>
          <Products
            color={this.state.color}
            secondsLeft={this.state.secondsLeft}
            price={this.state.price}
            newPrice={this.state.newPrice}
            salesProductsIds={this.props.salesProductsIds}
          ></Products>
        </div>
      </div>
    );
  }
}

export default SaleCountdown;
