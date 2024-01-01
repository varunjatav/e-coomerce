import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quantityActions } from "../store/quantitySlice";
import { cartSliceAction } from "../store/cartSlice";

const CartProducts = ({ item }) => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = useSelector((store) => store.quantity);
  const inputEl = useRef(1);
  console.log(item.id, cartItems);
  const handleDelete = () => {
    console.log("handle delete clicked");
    dispatch(cartSliceAction.removeFromCart(item.id));
  };
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(quantityActions.onInputChange(inputEl.current.value));
  };
  const handleSubtract = () => {
    dispatch(quantityActions.onSubtract());
  };
  const handleAdd = () => {
    dispatch(quantityActions.onAdd());
  };

  let discount = item.price * (item.discountPercentage / 100);
  let finalPrice = Math.round(item.price - discount) * quantity;
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src={item.thumbnail}
              className="w-100"
              alt="Blue Jeans Jacket"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{item.title}</strong>
          </p>
          <p>{item.description}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            title="Remove item"
            onClick={handleDelete}
          >
            <MdDelete />
          </button>
          
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <button
              className="btn btn-primary px-3 me-2"
              onClick={handleSubtract}
            >
              <FiMinus />
            </button>

            <div className="form-outline">
              <input
                id="form1"
                min="0"
                name="quantity"
                ref={inputEl}
                value={+quantity}
                type="number"
                className="form-control"
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="form1">
                Quantity
              </label>
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
              onClick={handleAdd}
            >
              <IoMdAdd />
            </button>
          </div>

          <p className="text-start text-md-center">
            <strong>${finalPrice}</strong>
          </p>
        </div>
      </div>

      <hr className="my-4" />
    </div>
  );
};

export default CartProducts;
