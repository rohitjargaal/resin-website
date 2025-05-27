import React from 'react'

function HomePage() {
  return (
    <div className="">
      <div className="mt-4" style={{ height: "60vh", padding: "0px 30px" }}>
         <div className="img-section"  style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "20px",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"end",padding:"3rem",color:"white" }}>
          <h1 style={{color:"wheat"}}>Nova Threads</h1>
          <h3>Trending Deals For You</h3>
          <button type="button" class="btn btn-outline-danger">Shop Now</button>

      </div>
      </div>
      <div className="feature-sec mt-5 mb-5" style={{ height: "auto", padding: "0px 100px" }}>
        <h3 className='text-center'>Featured Products</h3>
        <div className="card-groups">
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img1.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img2.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img3.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img5.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img6.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img7.jpg" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-product">
        <h2 className='text-center'>Super deals</h2>
                <div className="card-groups">
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img1.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img2.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img3.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img5.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
          <div class="card-container">
            <div className='img-box'>
              <img src="media/images/img6.webp" class="card-img-top" alt="..." />
            </div>
            <div class=" mt-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "auto", padding: "0px 1rem" }}>
              <h5 class="card-title">Card title</h5>
              <p style={{ margin: "0px" }}>HELLO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
