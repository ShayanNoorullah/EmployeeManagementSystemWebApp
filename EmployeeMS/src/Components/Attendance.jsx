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
                    </tr>
                </thead>
                <tbody>
                    {
                        attendance.map(c => (
                            <tr>
                                <td>{c.date}</td>
                                <td>{c.timein}</td>
                                <td>{c.duration}</td>
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