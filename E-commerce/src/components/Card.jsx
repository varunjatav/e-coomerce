

const Card = ({item}) => {
  return (
    <div className="card mb-5" style={{"width": "18rem"}}>
    <img src={item.images[0]} className="card-img-top" height="300px" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.description}</p>
      <a href="#" className="btn btn-primary">Add to Cart</a>
    </div>
  </div>
  )
}

export default Card