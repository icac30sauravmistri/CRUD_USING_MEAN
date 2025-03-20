import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./user.css";
import axios from 'axios';

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/users/")
            setUsers(response.data);
        }
        fetchData();
    }, [])

    return (
        <div className='user-table'>
            <Link to={"/users/create"} className='add-button'>Add User</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{++index}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td className='action-buttons'>
                                        <Link to={"/users/edit"}><i className="fa-solid fa-user-pen"></i></Link>
                                        <button><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default User
