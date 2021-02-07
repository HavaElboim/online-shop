import React from "react";
import "./ProductDisplayClass.css";

/* this component is called from the */

class ProductDisplayClass extends React.Component {
  state = {
    price: this.props.price,
    newPrice: this.props.price,
    color: this.props.color,
    category: this.props.category,
    selectedCategory: this.props.selectedCategory,
  };

  showSalePrice() {
    if (
      this.props.secondsLeft > 0 &&
      this.props.salesProductsIds.includes(this.props.id)
    ) {
      this.setState({
        newPrice: ` Sale: $ ${+(this.state.price * 0.9).toFixed(2)}`,
      });
    } else {
      this.setState({ newPrice: "" });
    }
  }

  componentDidMount() {
    this.showSalePrice();
    console.log("selected: ", this.state.selectedCategory);
    console.log("selected props: ", this.props.selectedCategory);
  }

  /* renders an individual product card, containing product information and image.
  the information an image are obtained from the props which are passed from the ProductsContainerClass */

  render() {
    console.log(
      "current selectiong: ",
      this.state.selectedCategory,
      this.props.selectedCategory,
      " cat of prod: ",
      this.props.category
    );
    return (
      (!this.props.selectedCategory ||
        this.props.category === this.props.selectedCategory) && (
        <div className="product-card">
          <div className="product-info">
            <h6 style={{ color: this.props.color }}>{this.props.title}</h6>
          </div>
          <div className="product-image">
            <img src={this.props.image} alt={""} />
          </div>
          <div className="product-info">
            <h5>$ {this.props.price}</h5>
            <h5
              style={{
                color: this.props.color,
                display: this.props.color === "black" ? "none" : "block",
              }}
            >
              {this.state.newPrice}
            </h5>
          </div>
        </div>
      )
    );
  }
}

export default ProductDisplayClass;
