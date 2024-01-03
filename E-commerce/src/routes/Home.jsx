import React from "react";
import Carousel from "../components/Carousel";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <Carousel />
      <CardContainer />
      <Pagination />
    </>
  );
};

export default Home;
