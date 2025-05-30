import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className="row" style={{ padding: "0px 100px", margin:"0px"}}>
        <div className="col-4">
          <h5><b>Nova Threads</b></h5>
          <p>Discover pieces that don't just fit your body, but celebrate your spirit. Our collection is designed to empower you, making every day feel like a runway.</p>
          <div className="icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <p></p>
        </div>
        <div className="col-4">
          <h6><b>Customer Policies</b></h6>
          <p className='mt-3'><a href="" className='anchortag'>Privacy Policy</a></p>
          <p><a href="" className='anchortag'>Cancellation</a></p>
          <p><a href="" className='anchortag'>Shiping</a></p>
          <p><a href="" className='anchortag'>Track Orders</a></p>
          <p><a href="" className='anchortag'><b>Return within 14days</b> of receiving your order</a></p>
        </div>
        <div className="col-4">
          <h6><b>Contact Us</b></h6>
          <p className='mt-3'><a href="" className='anchortag'>Support @novathreads@gmail.com</a></p>
          <p>Address : 8765 North Redwood Rd.Ponoka, AB T4J 0H3</p>
        </div>
      </div>
      <div className='text-center mt-2'>
        © 2025 Nova Threads Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
