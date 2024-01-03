import React from "react";
import Carousel from "../components/Carousel";
import CardContainer from "../components/CardContainer";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import Login from "./Login";

const Home = () => {
  const items = useSelector((store) => store.items);
  const login = useSelector((store) => store.login);
  console.log("login State: " + login);
  return (
    <>
    {
      login === true ?
        <>
        <Carousel />
        <CardContainer />
        {
          items.length >=10 && <Pagination />
        }
        </> : <Login/>
    }
      
    </>
  );
};

export default Home;
