import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDepartment = () => {
    const {id} = useParams()
    const [department, setDepartment] = useState({
        name:"",
        location:"",
        numberofemployees:""
    }, [])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/department/'+id)
        .then(result => {
            setDepartment({
                ...department,
                name: result.data.Result[0].name,
                location: result.data.Result[0].location,
                numberofemployees: result.data.Result[0].numberofemployees,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_department/'+id, department)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/department')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Department</h3>
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
              autoComplete='off'
              value={department.name}
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
              value={department.location}
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
              autoComplete='off'
              value={department.numberofemployees}
              onChange={(e) =>
                setDepartment({ ...department, numberofemployees: e.target.value })
              }
            />
            </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Department
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditDepartment