import { useDispatch } from "react-redux";
import { cartSliceAction } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function SuccessModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleComplete = () => {
        dispatch(cartSliceAction.emptyCart());
        navigate("/")
      };
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Payment Success
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          Thankyou for shopping with us. Your products will be delivered within a week.
        </div>
        <div className="modal-footer">
          
          <button
            type="button"
            className="btn btn-primary"
            onClick={()=>handleComplete()}
            data-bs-dismiss="modal"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SuccessModal;