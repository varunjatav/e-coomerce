import React from "react";

import YourCart from "../components/YourCart";
import Billing from "../components/Billing";

const Checkout = () => {
 

  return (
    <div className="container mt-4">
     

      <div className="row">
      <YourCart/>
      <Billing/>
      </div>

     
    </div>
  );
};

export default Checkout;
