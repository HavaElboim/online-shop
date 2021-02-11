import React, { useEffect } from "react";
import SaleCountdown from "../SaleCountdown/SaleCountdown";
import PropTypes from "prop-types";
import CategorySelect from "../CategorySelect/CategorySelect";

const Header = (props) => {
  const {
    selectedCategory,
    setSelectedCategory,
    secondsLeft,
    setSecondsLeft,
    products,
  } = props;

  useEffect(() => {}, [products]);

  return (
    <div>
      <h1> App</h1>
      <SaleCountdown
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
      ></SaleCountdown>
      {products.length > 0 && (
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          products={products}
        ></CategorySelect>
      )}
    </div>
  );
};

Header.propTypes = {
  secondsLeft: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};
/* need to add proptypes of products*/

export default Header;

/*
      <SaleCountdown
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
      ></SaleCountdown>
      {products.length > 0 && (
        <CategorySelect>
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          products={products}
        </CategorySelect>
        */
