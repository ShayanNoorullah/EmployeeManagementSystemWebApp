import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditAttendance = () => {
    const {id} = useParams()
    const [attendance, setAttendance] = useState({
        date:"",
        timein:"",
        duration:"",
        emp_id:""
    }, [])
      const navigate = useNavigate()

      const [employee, setEmployee] = useState([]);
      useEffect(() => {
        axios
          .get("http://localhost:3000/auth/employee")
          .then((result) => {
            if (result.data.Status) {
              setEmployee(result.data.Result);
            } else {
              alert(result.data.Error);
            }
          })
          .catch((err) => console.log(err));
      }, []);

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/attendance/'+id)
        .then(result => {
            setAttendance({
                ...attendance,
                date: result.data.Result[0].date,
                timein: result.data.Result[0].timein,
                duration: result.data.Result[0].duration,
                emp_id: result.data.Result[0].emp_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_attendance/'+id, attendance)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/attendance')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Attendance</h3>
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
              autoComplete="off"
              value={attendance.date}
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
              autoComplete="off"
              value={attendance.timein}
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
              autoComplete="off"
              value={attendance.duration}
              onChange={(e) =>
                setAttendance({ ...attendance, duration: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <select
              name="employee"
              id="employee"
              className="form-select"
              onChange={(e) =>
                setAttendance({ ...attendance, emp_id: e.target.value })
              }
            >
              <option value="">Select Employee</option>
              {employee.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditAttendance