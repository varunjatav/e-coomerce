import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const cartItems = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items.itemArr);
  const itemQuantity = useSelector((store) => store.items.quantity);
  const finalItems = items.filter((item) => {
    const ItemId = cartItems.indexOf(item.id);
    return ItemId >= 0;
  });

  let CONVENIEINCE_FEES;
  if (cartItems <= 0) {
    CONVENIEINCE_FEES = 0;
  } else {
    CONVENIEINCE_FEES = 9;
  }

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    totalMRP += item.price * +(itemQuantity);
    totalDiscount += Math.round((item.price * item.discountPercentage)/100);
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIEINCE_FEES;

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              MRP
              <span>${totalMRP}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Discount
              <span>${totalDiscount}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Convenience
              <span>${CONVENIEINCE_FEES}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>${finalPayment}</strong>
              </span>
            </li>
          </ul>

          <Link to="/checkout" type="button" className="btn btn-primary btn-lg btn-block">
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
