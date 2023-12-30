import React from "react";
import { useSelector } from "react-redux";


import Pagination from "./Pagination";
import Carousel from "./Carousel";
import CardContainer from "./CardContainer";
import Loader from "./Loader";

const Home = () => {
   const fetchStatus = useSelector((store) => store.fetch);

  return (
    <>
      <Carousel />
      {fetchStatus.currentlyFetching ? <Loader/> : <CardContainer/>}
      
      <Pagination />
    </>
  );
};

export default Home;
