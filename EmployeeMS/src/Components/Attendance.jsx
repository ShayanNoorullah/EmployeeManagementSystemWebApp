import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Attendance = () => {

    const [attendance, setAttendance] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/attendance')
        .then(result => {
            if(result.data.Status) {
                setAttendance(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_attendance/'+id)
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
            <h3>Employee Attendance List</h3>
        </div>
        <Link to="/dashboard/add_attendance" className='btn btn-success'>
        Mark Attendance
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time in</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map(c => (
                            <tr>
                                <td>{c.date}</td>
                                <td>{c.timein}</td>
                                <td>{c.duration}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_attendance/` + c.id}
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

export default Attendance