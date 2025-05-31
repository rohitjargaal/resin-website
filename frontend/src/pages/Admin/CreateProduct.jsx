import React from 'react'

function CreateProduct() {
  return (
    <form action="" className='mt-5'>
      <div className="row">

        <div className="col-4 offset-4">
          <h3>Add New Product</h3>
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" placeholder="Enter product title" />
          </div>
          <div className="row">
            <div className="col-6">
              <div class="mb-3">
                <label class="form-label">Price</label>
                <input type="text" class="form-control" placeholder="Enter product price" />
              </div>
            </div>
            <div className="col-6">
              <div class="mb-3">
                <label class="form-label">Quantity available</label>
                <input type="number" class="form-control" placeholder="Enter product quantity" />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea type="text" class="form-control" placeholder="Enter product Description" rows={4} />
          </div>

          <div className="mb-3">
            <button className='btn btn-primary'>sumbit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CreateProduct

