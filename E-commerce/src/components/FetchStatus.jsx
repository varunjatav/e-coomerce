import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchActions } from "../store/fetchingSlice";
import axios from "axios";

const FetchStatus = () => {
  const dispatch = useDispatch();

  const query = useSelector((store) => store.query);
  let skip = useSelector((store) => store.page);
 
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchActions.markFetchingStarted());
    axios
      .get(
        `https://dummyjson.com/products/search?q=${query}&limit=10&skip=${skip}`,
        { signal }
      )
      .then((res) => {
       
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.markFetchingFinished());
        dispatch(itemActions.getAllProducts( res.data.products ));
      })
      .catch((err) => {
        console.log("Error: " + err.message);
      });
    return () => {
      controller.abort();
    };
  }, [skip,query]);

  return <></>;
};

export default FetchStatus;
