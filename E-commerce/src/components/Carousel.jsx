
const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" style={{"height": "400px"}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" style={{"height": "400px"}}>
        <img src="https://th.bing.com/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain" className="d-block w-100" alt="carousel-1" style={{"height": "400px"}}/>
      </div>
      <div className="carousel-item" style={{"height": "400px"}}>
        <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651" className="d-block w-100" alt="carousel-2" style={{"height": "400px"}}/>
      </div>
      <div className="carousel-item" style={{"height": "400px"}}>
        <img src="https://petapixel.com/assets/uploads/2017/03/product_feat.jpg" className="d-block w-100" alt="carousel-3" style={{"height": "400px"}}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel