import { React, useEffect, useState } from "react";
//import ProductDisplayClass from "../../components/ProductDisplayClass/ProductDisplayClass";
import sale from "../../components/ProductDisplayClass/sale.png";

const ProductInfo = (props) => {
  const { productid, price, image, title, isSale, newPrice } = props;
  //const { match: { params } } = props;

  const [productData, setData] = useState([]);

  const color = "red";

  useEffect(() => {
    console.log("ProductInfo props are :", props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
    console.log("fetched ");
  }, []);*/

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [productid]);

  return (
    <div>
      <h2>Product info</h2>
      <div>Your Product description:</div>
      <h1>{title}</h1>
      <div className="product-info">
        {newPrice && isSale ? <img src={sale} alt="sale item"></img> : null}
        <h6
          style={{
            color: newPrice && isSale ? color : "black",
          }}
        >
          {title}
        </h6>
      </div>
      <div className="product-image">
        <img src={image} alt={""} />
      </div>
      <div className="product-info">
        <h5>$ {price}</h5>
        <h5
          style={{
            color: color,
            display: newPrice && isSale ? "block" : "none",
          }}
        >
          {newPrice}
        </h5>
        <h5>{productData.description}</h5>
      </div>
    </div>
  );
};

export default ProductInfo;

/*

// TodoDetails page for product page:

import { useEffect, useState } from "react";

const TodoDetails = ({ match }) => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.cypress.io/todos/${match.params.todoId}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [match.params.todoId]);

  return <div>Todo Details: {todo ? todo.title : ""}</div>;
};
*/
