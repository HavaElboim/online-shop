import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const ProductInfo = ({ match }) => {
  //const [productData, setData] = useState({});

  console.log("match: ", { match });
  let { id } = useParams();

  console.log("id is ", id);

  /*useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productid}`)
      .then((result) => result.json())
      .then(
        (data) => {
          setData(data);
          //fetched = true;
        },
        [match.params.productid]
      );
    console.log("fetched ");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */
  //return <div>prod details: {productData.title}</div>;

  return <div>prod details: ${match}</div>;
  //console.log("in prodinfo page");
  //console.log("match is ", props);
  //return <div> asdfa}</div>;
};
export default ProductInfo;

//import { React, useEffect, useState } from "react";
////import { React } from "react";

//import ProductDisplayClass from "../../components/ProductDisplayClass/ProductDisplayClass";
//import sale from "../../components/ProductDisplayClass/sale.png";

//const ProductInfo = ({ match }) => {
//const [productData, setData] = useState([]);

//const color = "red";

//const [salesProductsIds] = [1, 3, 5, 6];
/*
  console.log("in productinfo");
  return <div>product</div>;
};
export default ProductInfo;
  /*
  let fetched = false;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productid}`)
      .then((result) => result.json())
      .then((data) => {
        setData(data);
        fetched = true;
      });
    console.log("fetched ");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetched) {
    console.log("displaying");
    return <div>ProductInfo from :{match.params.productid} </div>;
  }

  */

/*const newPrice = salesProductsIds.includes(productid)
    ? ` Sale: $ ${+(price * 0.9).toFixed(2)}`
    : "";*/

/*useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setData(data);
      });
    console.log("fetched ");
  }, []);*/

/*

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(
      "descr is ",
      productData,
      ` from https://fakestoreapi.com/products/${productid}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  /*

    const [products, setProducts] = useState([]);
  const [isSale, setSale] = useState("true");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setProducts(data);
      });
    console.log("fetched ");
  }, []);

  useEffect(() => {
    console.log("prods are ", products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Product info</h2>
      <div>Your Product description:</div>
      <h1>{title}</h1>
      <div className="product-info">
        {newprice && issale ? <img src={sale} alt="sale item"></img> : null}
        <h6
          style={{
            color: newprice && issale ? color : "black",
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
            display: newprice && issale ? "block" : "none",
          }}
        >
          {newprice}
        </h5>
        <h5>{productData.description}</h5>
      </div>
    </div>
  );
  */

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
