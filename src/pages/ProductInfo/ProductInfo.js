import { React, useState, useEffect } from "react";
import "./ProductInfo.css";

const ProductInfo = ({ match }) => {
  const [productData, setData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productid}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(
      "descr is ",
      productData,
      ` from https://fakestoreapi.com/products/${match.params.productid}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (productData) {
    return (
      <div>
        <h1>{productData.title}</h1>
        <div className="product-image">
          <img src={productData.image} alt={""} />
        </div>
        <div>
          <div className="product-info">{productData.description}</div>
          <div className="product-info">$ {productData.price}</div>
        </div>
      </div>
    );
  }
};
export default ProductInfo;
