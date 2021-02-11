import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListCategories from "../ListCategories/ListCategories";

const CategorySelect = (props) => {
  const { selectedCategory, setSelectedCategory, products } = props;

  useEffect(() => {
    console.log(
      "In CategorySelect, number of products from props: ",
      products.length
    );
  }, [products]);

  return (
    <div>
      <span>What do you want to buy? </span>
      {products.length > 0 && (
        <select
          id="selectCat"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All products</option>
          <ListCategories products={products}></ListCategories>
        </select>
      )}
      <button onClick={(e) => setSelectedCategory("")}>Clear choice</button>
    </div>
  );
};

CategorySelect.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

/* add proptypes for products */
export default CategorySelect;
