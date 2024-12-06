import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPosition = () => {
    const [position, setPosition] = useState({
        postitle:"",
        description:"",
        minsalary:"",
        maxsalary:"",
        requiredskills:"",
        department_id: ""
    }, [])

    const navigate = useNavigate()

    const [department, setDepartment] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/auth/department")
        .then((result) => {
          if (result.data.Status) {
            setDepartment(result.data.Result);
          } else {
            alert(result.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_position', {
            postitle: position.postitle,
            description: position.description,
            minsalary: position.minsalary,
            maxsalary: position.maxsalary,
            requiredskills: position.requiredskills,
            department_id: position.department_id
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/position')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Manage Employee Positions</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTitle"
              placeholder="Enter Position Title"
              onChange={(e) =>
                setPosition({ ...position, postitle: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDescription"
              placeholder="Enter Description"
              onChange={(e) =>
                setPosition({ ...position, description: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputMinsalary" className="form-label">
              Minimum Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputMinSalary"
              placeholder="Enter Minimum Salary"
              onChange={(e) =>
                setPosition({ ...position, minsalary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputMaxsalary" className="form-label">
              Maximum Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputMaxSalary"
              placeholder="Enter Maximum Salary"
              onChange={(e) =>
                setPosition({ ...position, maxsalary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputRequiredskills" className="form-label">
              Required Skills
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRequiredskills"
              placeholder="Enter Required Skills"
              onChange={(e) =>
                setPosition({ ...position, requiredskills: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              onChange={(e) =>
                setPosition({ ...position, department_id: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {department.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Position
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPosition