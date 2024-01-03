import React from "react";
import { useSelector } from "react-redux";
const YourCart = () => {
  const cartItems = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const ItemId = cartItems.indexOf(item.id);
    return ItemId >= 0;
  });
  console.log(finalItems);

  let CONVENIEINCE_FEES;
  if (cartItems <= 0) {
    CONVENIEINCE_FEES = 0;
  } else {
    CONVENIEINCE_FEES = 9;
  }

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    totalMRP += item.price;
    totalDiscount += Math.round((item.price * item.discountPercentage) / 100);
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIEINCE_FEES;

  return (
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        {finalItems.map((item) => (
          <li key={item.title} className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">{item.title}</h6>
              <small className="text-muted">{item.description}</small>
            </div>
            <span className="text-muted">${item.price}</span>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Discount</h6>
          </div>
          <span className="text-muted">${totalDiscount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Convenience Fees</h6>
          </div>
          <span className="text-muted">${CONVENIEINCE_FEES}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${finalPayment}</strong>
        </li>
      </ul>
    </div>
  );
};

export default YourCart;
