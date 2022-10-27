import React from 'react'

const AddUser = () => {
  return (
    <div>
      <div className='container'>
        <h1>Add User</h1>
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" placeholder="Enter name" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Phone</label>
            <input type="text" class="form-control" placeholder="Enter Phone" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">City</label>
            <input type="text" class="form-control" placeholder="Enter City" />
          </div>


          <button type="submit" class="btn btn-primary">Add User</button>
        </form>
      </div>

    </div>
  )
}

export default AddUser
