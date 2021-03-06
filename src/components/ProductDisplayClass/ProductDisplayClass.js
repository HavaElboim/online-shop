import React from "react";
import "./ProductDisplayClass.css";
import sale from "./sale.png";
import PropTypes from "prop-types";

/* this component is called from the Products class.
   It renders individual products cards (product title, image, price).
   If the product is a sale item, its title and sale price are colored until the sale ends 
   */

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
  }

  /* renders an individual product card, containing product information and image.
  the information an image are obtained from the props which are passed from the ProductsContainerClass */

  /* before <h6> :
  /* {this.state.newPrice && <img src={sale} alt="sale item"></img>}*/

  render() {
    return (
      (!this.props.selectedCategory ||
        this.props.category === this.props.selectedCategory) && (
        <div className="product-card">
          <div className="product-info">
            {this.state.newPrice && this.props.secondsLeft ? (
              <img src={sale} alt="sale item"></img>
            ) : null}
            <h6
              style={{
                color: this.state.newPrice ? this.props.color : "black",
              }}
            >
              {this.props.title}
            </h6>
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
