import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./user.css";
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/users/")
            setUsers(response.data);
        }
        fetchData();
    }, [])

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/users/delete/${userId}`)
            .then((response) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
                toast.success(response.data.message, { position: "top-right" })
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                                        <Link to={`/users/edit/` + user._id}><i className="fa-solid fa-user-pen"></i></Link>
                                        <button onClick={() => deleteUser(user._id)}><i className="fa-solid fa-trash-can"></i></button>
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
