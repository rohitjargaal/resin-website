import React from 'react'

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="img-section">
        <h1 style={{ color: "wheat" }}>Nova Threads</h1>
        <h3>Trending Deals For You</h3>
        <button type="button" className="btn btn-outline-danger">Shop Now</button>
      </div>
      <div className="feature-sec mt-5 mb-5" style={{ height: "auto", padding: "0px 100px" }}>
        <h3 className='text-center'>Featured Products</h3>
        <div className="card-groups">
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img1.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img2.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img3.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img5.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img6.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img7.jpg" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-product">
        <h2 className='text-center'>Super deals</h2>
        <div className="card-groups">
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img1.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img2.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img3.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img5.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div className="card-container">
            <div className='img-box'>
              <img src="media/images/img6.webp" className="card-img-top" alt="..." />
            </div>
            <div className=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 className="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
