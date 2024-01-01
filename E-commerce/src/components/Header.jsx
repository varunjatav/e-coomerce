import React, { useRef } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { QueryActions } from "../store/QuerySlice";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const searchEl = useRef("");
  const cartItems =  useSelector(store => store.cart); 
  let search = "";
  const handleQuery = (e) => {
    search = searchEl.current.value;
    console.log(e.target.value, "search: ", search);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(QueryActions.getByQuery(search));
    searchEl.current.value = "";
  };
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to='/' className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              ref={searchEl}
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleQuery}
            />
            <button className="btn btn-primary" type="submit">
              <IoIosSearch />
            </button>
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
          <div className="px-4">
            <Link to='/cart'className="text-white text-decoration-none">
            <span className="cart-count">{cartItems.length}</span>
            <BsFillCartXFill />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
