import React from "react";

class HeaderClass extends React.Component {
  state = {
    selectCategory: this.props.selectCategory,
    products: this.props.products,
    categories: this.props.categories,
  };

  input = "";
  render() {
    return (
      <div>
        <h1> App</h1>
        <h2>Header</h2>
      </div>
    );
  }
}

export default HeaderClass;
