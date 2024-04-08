import { useEffect, useState } from "react";

import Card from "../Card/Index";
import products from "../../Assets/db.json";

const Cards = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  console.log(products.products);
  useEffect(() => {
    if (products.length !== 0) {
      setDataLoaded(true);
    } else {
      setDataLoaded(false);
    }
  }, [products]);

  return (
    <div>
      {products.products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          brand={product.brand}
          description={product.description}
          active={product.active}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default Cards;
