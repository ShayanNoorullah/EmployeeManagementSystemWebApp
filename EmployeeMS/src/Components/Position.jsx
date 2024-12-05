import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Position = () => {

    const [position, setPosition] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/position')
        .then(result => {
            if(result.data.Status) {
                setPosition(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_position/'+id)
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
            <h3>Employee Positions</h3>
        </div>
        <Link to="/dashboard/add_position" className='btn btn-success'>
        Add Position
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Position Title</th>
                        <th>Position Description</th>
                        <th>Min Salary</th>
                        <th>Max Salary</th>
                        <th>Required Skills</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        position.map(c => (
                            <tr>
                                <td>{c.postitle}</td>
                                <td>{c.description}</td>
                                <td>{c.minsalary}</td>
                                <td>{c.maxsalary}</td>
                                <td>{c.requiredskills}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_position/` + c.id}
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

export default Position