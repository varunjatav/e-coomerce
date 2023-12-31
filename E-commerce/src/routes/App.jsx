import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchStatus from "../components/fetchStatus";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

function App() {
  const fetchStatus = useSelector((store) => store.fetch);
  return (
    <>
      <Header />
      <FetchStatus />
      {fetchStatus.currentlyFetching ? <Loader/>: <Outlet />}
      <Footer />
    </>
  );
}

export default App;
