import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddLeaves = () => {
    const [leaves, setLeaves] = useState({
        type:"",
        startdate:"",
        enddate:"",
        reason:"",
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_leaves', {
            type: leaves.type,
            startdate: leaves.startdate,
            enddate: leaves.enddate,
            reason: leaves.reason,
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/leaves')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Leave Request</h3>
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
              onChange={(e) =>
                setLeaves({ ...leaves, reason: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Leave Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddLeaves