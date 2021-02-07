import React from "react";

class CategoryDisplayClass extends React.Component {
  render() {
    return <option value="this.props.category">{this.props.category}</option>;
  }
}

export default CategoryDisplayClass;
