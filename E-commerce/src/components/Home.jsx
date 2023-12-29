import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import Card from "./Card";
import Pagination from "./Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const skip = useSelector(store => store.page);
  // console.log(skip);
  const items = useSelector((store) => store.items);


  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
       
        dispatch(itemActions.getAllProducts(data.products));
      });
  }, [skip]);
  return (
    <>
      <div className="items-container my-5">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination  />
    </>
  );
};

export default Home;
