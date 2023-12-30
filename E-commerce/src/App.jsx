import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import FetchStatus from "./components/fetchStatus";
import Loader from "./components/Loader";

function App() {

  return (
    <>
      <Header />
      <FetchStatus />
      <Home />
      <Footer />
    </>
  );
}

export default App;
