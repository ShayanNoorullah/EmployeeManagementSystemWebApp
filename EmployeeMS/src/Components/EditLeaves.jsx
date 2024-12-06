import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditLeaves = () => {
    const {id} = useParams()
    const [leaves, setLeaves] = useState({
        type:"",
        startdate:"",
        enddate:"",
        reason:"",
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
        axios.get('http://localhost:3000/auth/leaves/'+id)
        .then(result => {
            setLeaves({
                ...leaves,
                type: result.data.Result[0].type,
                startdate: result.data.Result[0].startdate,
                enddate: result.data.Result[0].enddate,
                reason: result.data.Result[0].reason,
                emp_id: result.data.Result[0].emp_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_leaves/'+id, leaves)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/leaves')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Leaves</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="inputType" className="form-label">
              Leave Type
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputLeaveType"
              placeholder="Enter Leave Type"
              autoComplete="off"
              value={leaves.type}
              onChange={(e) =>
                setLeaves({ ...leaves, type: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputStartdate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputStartdate"
              placeholder="Enter Start Date"
              autoComplete="off"
              value={leaves.startdate}
              onChange={(e) =>
                setLeaves({ ...leaves, startdate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEnddate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputEnddate"
              placeholder="Enter End Date"
              autoComplete="off"
              value={leaves.enddate}
              onChange={(e) =>
                setLeaves({ ...leaves, enddate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputReason" className="form-label">
              Reason
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputReason"
              placeholder="Enter Reason"
              autoComplete="off"
              value={leaves.reason}
              onChange={(e) =>
                setLeaves({ ...leaves, reason: e.target.value })
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
                setLeaves({ ...leaves, emp_id: e.target.value })
              }
            >
              {employee.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Leave Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditLeaves