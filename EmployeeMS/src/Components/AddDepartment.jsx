import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        name:"",
        location:"",
        numberofemployees:""
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_department', {
            name: department.name,
            location: department.location,
            numberofemployees: department.numberofemployees
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/department')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Department</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Department Name"
              onChange={(e) =>
                setDepartment({ ...department, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputLocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputLocation"
              placeholder="Enter Department Location"
              autoComplete="off"
              onChange={(e) =>
                setDepartment({ ...department, location: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputNumofemployees" className="form-label">
              Number Of Employees
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputNumofemployees"
              placeholder="Enter Number of Employees"
              onChange={(e) =>
                setDepartment({ ...department, numberofemployees: e.target.value })
              }
            />
            </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDepartment