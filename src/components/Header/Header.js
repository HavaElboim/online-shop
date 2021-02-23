import React from "react";
import SaleCountdown from "../SaleCountdown/SaleCountdown";
import PropTypes from "prop-types";
import CategorySelect from "../CategorySelect/CategorySelect";
import SliderFilterPrice from "../SliderFilterPrice/SliderFilterPrice";
import "./Header.css";
import ChangeThemeColors from "../ChangeThemeColors/ChangeThemeColors";

const Header = (props) => {
  const {
    selectedCategory,
    setSelectedCategory,
    secondsLeft,
    setSecondsLeft,
    isSale,
    setSale,
    products,
    priceRange,
    setPriceRange,
  } = props;

  return (
    <div>
      <ChangeThemeColors />
      <SaleCountdown
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        isSale={isSale}
        setSale={setSale}
      ></SaleCountdown>
      {products.length > 0 && (
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          products={products}
        ></CategorySelect>
      )}
      <div className="price-range">
        <span>Select Price range:</span>
        <SliderFilterPrice
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          products={products}
        ></SliderFilterPrice>
      </div>
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

/*      return (
        <div>
          <h1> App</h1>
          <SaleCountdown
            secondsLeft={secondsLeft}
            setSecondsLeft={setSecondsLeft}
            isSale={isSale}
            setSale={setSale}
          ></SaleCountdown>
          {products.length > 0 && (
            <CategorySelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              products={products}
            ></CategorySelect>
            <SliderFilterPrice priceRange={priceRange}></SliderFilterPrice}
          )}
        </div>
      );
      */
