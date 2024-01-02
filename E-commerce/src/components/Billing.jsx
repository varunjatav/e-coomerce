import { useRef } from "react";
import { useSelector } from "react-redux";

const Billing = () => {
  const firstNameElement = useRef("");
  const lastNameElement = useRef("");
  const userNameElement = useRef("");
  const emailElement = useRef("");
  const addressElement = useRef("");
  const address2Element = useRef("");
  const zipElement = useRef("");
  const addressInfoElement = useRef("");
  const paymentOptionElement = useRef("");
  const nameOnCardElement = useRef("");
  const creditCardNumberElement = useRef("");
  const expiryDateElement = useRef("");
  const cvvElement = useRef("");

  const cartItems = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items.itemArr);
  let finalItems = items.filter((item) => {
    const ItemId = cartItems.indexOf(item.id);
    return ItemId >= 0;
  });
  console.log(finalItems);
  console.log(finalItems);
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = firstNameElement.current.value;
    const lastName = lastNameElement.current.value;
    const userName = userNameElement.current.value;
    const email = emailElement.current.value;
    const address = addressElement.current.value;
    const address2 = address2Element.current.value;
    const zip = zipElement.current.value;
    const addressInfo = addressInfoElement.current.value;
    const paymentOption = paymentOptionElement.current.value;
    const nameOnCard = nameOnCardElement.current.value;
    const creditCardNum = creditCardNumberElement.current.value;
    const expiryDate = expiryDateElement.current.value;
    const cvv = cvvElement.current.value;

    console.log(
      firstName,
      lastName,
      userName,
      email,
      address,
      address2,
      zip,
      addressInfo,
      paymentOption,
      nameOnCard,
      creditCardNum,
      expiryDate,
      cvv
    );

    firstNameElement.current.value = "";
    lastNameElement.current.value = "";
    userNameElement.current.value = "";
    emailElement.current.value = "";
    addressElement.current.value = "";
    address2Element.current.value = "";
    zipElement.current.value = "";
    addressInfoElement.current.value = "";
    paymentOptionElement.current.value = "";
    nameOnCardElement.current.value ="";
    creditCardNumberElement.current.value ="";
    expiryDateElement.current.value = "";
    cvvElement.current.value ="";
    finalItems = [];
  };

  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              ref={firstNameElement}
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              ref={lastNameElement}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              required="Enter your user name"
              ref={userNameElement}
            />
            <div className="invalid-feedback" style={{ width: "100%" }}>
              Your username is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            Email <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            ref={emailElement}
          />
          <div className="invalid-feedback">
            Please enter a valid email address htmlFor shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            required
            ref={addressElement}
          />
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">
            Address 2 <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Apartment or suite"
            ref={address2Element}
          />
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Postal Code"
              ref={zipElement}
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="same-address"
            ref={addressInfoElement}
            value="Shipping address is the same as my billing address"
          />
          <label className="custom-control-label" htmlFor="same-address">
            Shipping address is the same as my billing address
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="save-info"
            ref={addressInfoElement}
            value="Save this information for next time"
          />
          <label className="custom-control-label" htmlFor="save-info">
            Save this information for next time
          </label>
        </div>
        <hr className="mb-4" />

        <h4 className="mb-3">Payment</h4>

        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input
              id="credit"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              required=""
              value="credit"
              ref={paymentOptionElement}
            />
            <label className="custom-control-label" htmlFor="credit">
              Credit card
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              id="debit"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              required=""
              value="debit"
              ref={paymentOptionElement}
            />
            <label className="custom-control-label" htmlFor="debit">
              Debit card
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              id="paypal"
              name="paymentMethod"
              type="radio"
              className="custom-control-input"
              required=""
              value="paypal"
              ref={paymentOptionElement}
            />
            <label className="custom-control-label" htmlFor="paypal">
              Paypal
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input
              type="text"
              className="form-control"
              id="cc-name"
              placeholder="Your name on Card"
              required
              ref={nameOnCardElement}
            />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">Name on card is required</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input
              type="text"
              className="form-control"
              id="cc-number"
              placeholder="Your card Number"
              required
              ref={creditCardNumberElement}
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">Expiration</label>
            <input
              type="text"
              className="form-control"
              id="cc-expiration"
              placeholder="Expiration date"
              required
              ref={expiryDateElement}
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder="Your CVV"
              required
              ref={cvvElement}
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Buy
        </button>
      </form>
    </div>
  );
};

export default Billing;
