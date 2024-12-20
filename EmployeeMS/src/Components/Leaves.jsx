import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Leaves = () => {

    const [leaves, setLeaves] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/leaves')
        .then(result => {
            if(result.data.Status) {
                setLeaves(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_leaves/'+id)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
    }
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Current Leaves List</h3>
        </div>
        <Link to="/dashboard/add_leaves" className='btn btn-success'>
        Add Leave for Employee
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaves.map(c => (
                            <tr>
                                <td>{c.type}</td>
                                <td>{c.startdate}</td>
                                <td>{c.enddate}</td>
                                <td>{c.reason}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_leaves/` + c.id}
                                className="btn btn-info btn-sm me-2"
                                >
                                Edit
                                </Link>
                                <button
                                className="btn btn-warning btn-sm"
                                onClick={() => handleDelete(c.id)}
                                >
                                Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Leaves