import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBenefits = () => {
    const [benefits, setBenefits] = useState({
        type:"",
        startdate: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_benefits', {
            type: benefits.type,
            startdate: benefits.startdate, 
            duration: benefits.duration,
            emp_id: benefits.emp_id
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/benefits')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee Benefits</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputType" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputType"
              placeholder="Enter Benefit Type"
              onChange={(e) =>
                setBenefits({ ...benefits, type: e.target.value })
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
              id="inputStartDate"
              placeholder="Enter Start Date"
              onChange={(e) =>
                setBenefits({ ...benefits, startdate: e.target.value })
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
                setBenefits({ ...benefits, duration: e.target.value })
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
                setBenefits({ ...benefits, emp_id: e.target.value })
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
              Add Employee Benefits
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBenefits