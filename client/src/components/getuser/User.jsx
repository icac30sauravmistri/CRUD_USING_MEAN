import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css";

const User = () => {
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
                    <tr>
                        <td>1</td>
                        <td>SM</td>
                        <td>sm@sm.com</td>
                        <td className='action-buttons'>
                            <Link to={"/users/edit"}><i className="fa-solid fa-user-pen"></i></Link>
                            <button><i className="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User
