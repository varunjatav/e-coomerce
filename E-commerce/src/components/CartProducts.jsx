import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../store/cartSlice";

const CartProducts = ({ item }) => {
  const dispatch = useDispatch();
 


  const handleDelete = () => {
    console.log("handle delete clicked");
    dispatch(cartSliceAction.removeFromCart(item.id));
  };
 

  let discount = item.price * (item.discountPercentage / 100);
  let finalPrice = Math.round(item.price - discount) ;



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
