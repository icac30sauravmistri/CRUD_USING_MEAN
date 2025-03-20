import React, { useState } from "react"
import "./create.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast";

const Create = () => {

  const users = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/users/create", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" })
        navigate("/users")
      }).catch(error => console.log(error))
  }
  return (
    <div className="create-user">
      <Link to={"/users"}>Back</Link>
      <h3>Add New User</h3>
      <form className="create-user-form" onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="fname" name="first_name" autoComplete="off" placeholder="Enter first name" onChange={inputHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="lname" name="last_name" autoComplete="off" placeholder="Enter last name" onChange={inputHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="off" placeholder="Enter email" onChange={inputHandler} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Passowrd</label>
          <input type="password" id="password" name="password" autoComplete="off" placeholder="Enter password" onChange={inputHandler} />
        </div>
        <div className="input-group">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
