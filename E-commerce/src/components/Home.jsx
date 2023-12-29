import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);

  // console.log(items);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        dispatch(itemActions.getAllProducts(data.products))
      });
  }, []);
  return (
    <div className="items-container my-5">
     
      {items.map((item) => (
        <Card item={item}  key={item.id} />
      ))}
    
    </div>
  );
};

export default Home;
