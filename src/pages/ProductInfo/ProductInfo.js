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

/*return (
  <div>
    <h2>Product info</h2>
    <div>Your Product description:</div>
    <h1>{productData[0].title}</h1>
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
      <img src={productData[0].img} alt={""} />
    </div>
    <div className="product-info">
      <h5>$ {productData[0].price}</h5>
      <h5
        style={{
          color: color,
          display: newprice && issale ? "block" : "none",
        }}
      >
        {newprice}
      </h5>
      <h5>{productData[0].description}</h5>
    </div>
  </div>
);
*/
