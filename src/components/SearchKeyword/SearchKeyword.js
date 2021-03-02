import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import ListCategories from "../ListCategories/ListCategories";
import ThemeContext from "../../contexts/ThemeContexts";

const SearchKeyword = (props) => {
  const { searchKeyword, setSearch, products } = props;

  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    console.log(
      "In CategorySelect, number of products from props: ",
      products.length
    );
  }, [products]);

  return (
    <div style={{ color: theme.color, background: theme.background }}>
      <div>What do you want to buy?</div>
      {products.length > 0 && (
        <input
          id="setSearch"
          value={searchKeyword}
          onChange={(e) => setSearch(e.target.value)}
          style={{ color: theme.background, background: theme.foreground }}
        />
      )}
      <button
        id="searchButton"
        style={{ color: theme.background, background: theme.foreground }}
        onClick
      >
        Search
      </button>
      <button
        id="clearButton"
        onClick={(e) => setSearch("")}
        style={{ color: theme.background, background: theme.foreground }}
      >
        Clear search
      </button>
      <div>Searching for ${searchKeyword}</div>
    </div>
  );
};

SearchKeyword.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

/* add proptypes for products */
export default SearchKeyword;
