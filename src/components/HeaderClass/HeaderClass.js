import React from "react";
import ListCategories from "../ListCategories/ListCategories";

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
        <div>categories are: </div>
        <div>{this.categories}</div>
        <div>chosen input: {this.state.selectedCategory}</div>
        <select id="dropdown">
          <ListCategories
            selectCategory={this.state.selectCategory}
            products={this.state.products}
            categories={this.state.categories}
          />
        </select>
        <input
          type="text"
          onChange={(e) => this.setState({ selectedCategory: e.target.value })}
          value={this.state.selectedCategory}
        ></input>
        <button
          onClick={() => {
            this.props.selectCategory(
              this.state.products,
              this.state.selectedCategory
            );
            this.input = "";
          }}
        >
          Select Category
        </button>
      </div>
    );
  }
}

export default HeaderClass;
