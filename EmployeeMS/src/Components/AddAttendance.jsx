import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAttendance = () => {
    const [attendance, setAttendance] = useState({
        date:"",
        timein:"",
        duration:"",
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_attendance', {
            date: attendance.date,
            timein: attendance.timein,
            duration: attendance.duration,
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/attendance')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Mark Attendance</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputDate" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDate"
              placeholder="Enter Date"
              onChange={(e) =>
                setAttendance({ ...attendance, date: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputTimein" className="form-label">
              Time In
            </label>
            <input
              type="time"
              className="form-control rounded-0"
              id="inputTimein"
              placeholder="Enter Time In"
              onChange={(e) =>
                setAttendance({ ...attendance, timein: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDuration" className="form-label">
              Duration
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDuration"
              placeholder="Enter Duration"
              onChange={(e) =>
                setAttendance({ ...attendance, duration: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Mark Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAttendance