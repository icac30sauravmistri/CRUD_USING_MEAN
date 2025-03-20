import React, { useEffect, useState } from 'react'
import "../createuser/create.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Edit = () => {

  const users = {
    first_name: "",
    last_name: "",
    email: ""
  }

  const { id } = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate()

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id])

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/users/edit/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" })
        navigate("/users")
      }).catch(error => console.log(error))
  }

  return (
    <div className='create-user'>
      <Link to={"/users"}>Back</Link>
      <h3>Edit User</h3>
      <form className='create-user-form' onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" autoComplete="off" placeholder="Enter first name" value={user.first_name} onChange={inputChangeHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" autoComplete="off" placeholder="Enter last name" value={user.last_name} onChange={inputChangeHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" placeholder="Enter email" value={user.email} onChange={inputChangeHandler} />
        </div>
        <div className="input-group">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  )
}

export default Edit
