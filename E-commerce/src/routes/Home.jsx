import React from "react";
import { useSelector } from "react-redux";


import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import CardContainer from "../components/CardContainer";
import Loader from "../components/Loader";

const Home = () => {


  return (
    <>
      <Carousel />
      <CardContainer/>
      
      <Pagination />
    </>
  );
};

export default Home;
