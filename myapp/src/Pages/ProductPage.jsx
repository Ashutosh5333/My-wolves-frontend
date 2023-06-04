import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../Redux/action";
import "./productpage.css";
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  console.log(products);

  
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  
  return (
    <div style={{ width: "100%" }}>
      <div className="product-cards">
       
        {products.length > 0 &&
          products.map((item) => {
            return <ProductCard key={item._id}  item={item} />;
          })
          }
      </div>
    </div>
  )

};

export default ProductPage;
