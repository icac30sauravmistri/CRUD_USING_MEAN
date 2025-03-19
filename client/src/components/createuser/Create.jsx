import React from 'react'
import "./create.css"
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className='create-user'>
      <Link to={"/users"}>Back</Link>
      <h3>Add New User</h3>
      <form className='create-user-form'>
        <div className="input-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="fname" name="fname" autoComplete="off" placeholder="Enter first name" />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="lname" name="lname" autoComplete="off" placeholder="Enter last name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" placeholder="Enter email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Passowrd</label>
          <input type="password" id="password" name="password" autoComplete="off" placeholder="Enter password" />
        </div>
        <div className="input-group">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default Create
