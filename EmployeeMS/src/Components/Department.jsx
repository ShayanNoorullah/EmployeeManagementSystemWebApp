import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Department = () => {

    const [department, setDepartment] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_department/'+id)
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
            <h3>Department List</h3>
        </div>
        <Link to="/dashboard/add_department" className='btn btn-success'>
        Add Department
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Number of Employees</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        department.map(c => (
                            <tr>
                                <td>{c.name}</td>
                                <td>{c.location}</td>
                                <td>{c.numberofemployees}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_department/` + c.id}
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

export default Department