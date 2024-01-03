import { useSelector } from "react-redux";
import CartSummary from "../components/CartSummary";
import CartProducts from "../components/CartProducts";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const items = useSelector(store => store.items);
  
  const finalItems = items.filter((item) => {
    const ItemId = cartItems.indexOf(item.id);
    return ItemId >= 0;
  });

  return (
    <section className="pb-4">
      <div className="border rounded-5">
        <section
          className="w-100 p-5 gradient-custom"
          style={{ borderRadius: ".5rem .5rem 0 0" }}
        >
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cartItems.length} items</h5>
                </div>
                {finalItems.map((item) => (
                  <CartProducts key={item.id} item={item} />
                ))}
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <CartSummary />
          </div>
        </section>

     
      </div>
    </section>
  );
};

export default Cart;
