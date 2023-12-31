import { Link } from "react-router-dom";
const Card = ({ item }) => {
  // console.log(item.id);
  return (
    <Link to={`${item.id}`}className="text-decoration-none">
    <div className="card mb-5" style={{ width: "18rem" }}>
      <img
        src={item.images[0]}
        className="card-img-top"
        height="300px"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button  className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
    </Link>
  );
};

export default Card;
