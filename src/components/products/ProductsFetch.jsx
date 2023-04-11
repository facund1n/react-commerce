import { useEffect, useState } from "react";
import Loader from "../Loader";
import ProductsGrid from "./ProductsGrid";

const ProductsFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(console.log(data))
      .then(() => setisLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductsGrid data={data} />}</>;
};

export default ProductsFetch;
