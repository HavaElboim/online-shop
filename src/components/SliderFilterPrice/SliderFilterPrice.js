import React, { useStateת, useEffect } from "react";
// need to install and design: npm install antd
import { Slider, Switch } from "antd";
import "antd/dist/antd.css";

const SliderFilterPrice = (props) => {
  const { priceRange, setPriceRange, products } = props;

  useEffect(() => {
    if (products.length) {
      console.log("prods are ", products);
      let max = 0;
      for (let i = 0; i < products.length; i++) {
        max = products[i].price > max ? products[i].price : max;
        console.log("max: ", max);
      }
      setPriceRange([0, max]);
      console.log("max price is: ", max);
    }
  }, [products, setPriceRange]);

  //const [disabled] = useState(false);

  return (
    <>
      <Slider
        range
        defaultValue={[0, 1000]}
        min={0}
        max={1000}
        value={priceRange}
        onChange={setPriceRange}
      />
    </>
  );
};

export default SliderFilterPrice;

/*
 /* {
    Object.keys(groupBy(products, "price")).map((price) => price);
  }*/

// useEffect(() => {
/* setPriceRange(() => [
      0,
      Math.max(
        ...products.map(
          (product) => product.price.map((o) => o.y).map((o) => o.y),
          0
        )
      ),
    ]);*/
//products.map((product) => product.price.map((o) => console.log(o)));
/*console.log(
      "max: ",
      Math.max(...products.map((product) => product.price), 0)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
 // }, []);
  // const maxValueOfY = Math.max(...arrayToSearchIn.map(o => o.y), 0);
*/
