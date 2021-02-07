import React from "react";
import "./ListCategories.css";

//import CategoryDisplayClass from "../CategoryDisplayClass/CategoryDisplayClass";

class ListCategories extends React.Component {
  state = {
    categories: ["Select..."],
    products: [],
    selectedCategory: this.props.selectedCategory,
  };

  groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  componentDidMount() {
    this.setState({ products: this.props.products });
    console.log(
      "In ListC, number of products from props: ",
      this.props.products.length
    );
    console.log(
      "In ListC, number of products from state: ",
      this.state.products.length
    );

    if (this.state.products.length) {
      console.log("listing categories");
      this.setState({
        categories: (products) =>
          Object.keys(this.groupBy(products, "category")),
      });
      /*console.log("products: ", this.state.products);
      console.log("categories: ", this.state.categories);*/
      this.anothervar = Object.keys(
        this.groupBy(this.state.products, "category")
      );
      console.log("somevar: ", this.somevar);
      console.log("anothervar:", this.anothervar);
      this.setState({
        categories: [
          "Select...",
          ...this.anothervar,
        ] /*include option of no category selection also*/,
      });
      console.log("categories: ", this.state.categories);
    } else {
      console.log("products array empty");
    }
  }
  render() {
    return (
      <>
        {Object.keys(this.groupBy(this.state.products, "category")).map(
          (category) => (
            <option value={category} key={category}>
              {category}
            </option>
          )
        )}
      </>
    );
  }
}

export default ListCategories;
/*     
  render() {
    return (
      <div>
        {this.groupBy(this.state.products, "category").map((key) => (
          <option>{key}</option>
        ))}
      </div>
    );
  }

{this.state.categories.map((category) => (
          <option value="category"> category </option>*/
