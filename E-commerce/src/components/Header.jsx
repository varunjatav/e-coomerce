import React, { useRef } from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { QueryActions } from "../store/QuerySlice";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { loginActions } from "../store/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchEl = useRef("");
  const cartItems =  useSelector(store => store.cart); 
  const login = useSelector((store) => store.login);
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
  const handleLogout = () => {
    dispatch(loginActions.logOutUsers());
  }
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 d-flex align-items-center justify-content-center mb-md-0">
            <li>
              <Link to='/' className="nav-link px-2 text-white d-flex align-items-center gap-2">
             <IoHomeSharp/>   Home
              </Link>
            </li>
            <li>
            <Link to='/cart'className="text-white text-decoration-none d-flex align-items-center gap-2">
            <span className="cart-count">{cartItems.length}</span>
            <BsFillCartXFill /> Cart
            </Link>
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
            {
              login === true && <button type="button" className="btn btn-outline-light me-2" onClick={handleLogout}>
              Log out
            </button>
            }
            
         
          </div>
          <div className="px-4">
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
