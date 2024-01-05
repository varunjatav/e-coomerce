import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleItemActions } from "../store/singleItemSlice";
import { cartSliceAction } from "../store/cartSlice";
import { MdDelete, MdAdd } from "react-icons/md";

const SingleProduct = () => {
  let { productId } = useParams();
  productId = Number(productId);
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const singleItem = useSelector((store) => store.singleItem);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(singleItemActions.getSingleProduct(data));
      });
  }, [productId]);
  let discount = singleItem.price * (singleItem.discountPercentage / 100);
  let finalPrice = Math.round(singleItem.price - discount);

  const foundItem = cartItems.indexOf(productId) >= 0;

  const handleAddToCart = () => {
    console.log("clicked add to cart function :", productId);
    dispatch(cartSliceAction.addToCart(productId));
  };

  const handleRemoveFromCart = () => {
    dispatch(cartSliceAction.removeFromCart(productId));
  }
  return (
    <div className="container  my-5 h-[400px]">
      <div className="row gap-5">
        <div className="col">
          <img
            src={`${singleItem.thumbnail}`}
            alt={singleItem.title}
            className="rounded-4 "
            width="100%"
          />
          <div className="d-flex justify-content-between align-items-center mt-2">
            {singleItem.images?.map((img) => (
              <img
                key={img}
                src={`${img}`}
                alt={singleItem.title}
                className="rounded-4"
                width="80px"
                height="80px"
              />
            ))}
          </div>
        </div>
        <div className="col">
          <h1>{singleItem.title}</h1>
          <h3>{singleItem.brand}</h3>
          <p>{singleItem.description}</p>
          <h5>{singleItem.category}</h5>

          <div className="rating">⭐ | {singleItem.rating}</div>
          <div className="d-flex gap-5">
            <div className="px-2 pt-2 pb-1 rounded-5 text-center">
              <h4 className="fw-bold">${finalPrice}</h4>
            </div>
            <div className="px-2 pt-2 pb-1 rounded-5 text-center">
              <h4 className="fw-bold text-secondary text-decoration-line-through">
                ${singleItem.price}
              </h4>
            </div>
            <div className="bg-danger bg-opacity-25 px-2 pt-2 pb-1 rounded-5 text-center">
              <h4 className="text-danger">{singleItem.discountPercentage} %</h4>
            </div>
          </div>
          {foundItem ? (
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={handleRemoveFromCart}
            >
            <MdDelete />  Remove From Cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-dark mt-2"
              onClick={handleAddToCart}
            >
            <MdAdd />  Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
