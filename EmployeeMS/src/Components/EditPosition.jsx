import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPosition = () => {
    const {id} = useParams()
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

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/position/'+id)
        .then(result => {
            setPosition({
                ...position,
                postitle: result.data.Result[0].postitle,
                description: result.data.Result[0].description,
                minsalary: result.data.Result[0].minsalary,
                maxsalary: result.data.Result[0].maxsalary,
                requiredskills: result.data.Result[0].requiredskills,
                department_id: result.data.Result[0].department_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_position/'+id, position)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/position')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Position</h3>
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
              autoComplete="off"
              value={position.postitle}
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
              autoComplete="off"
              value={position.description}
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
              autoComplete="off"
              value={position.minsalary}
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
              autoComplete="off"
              value={position.maxsalary}
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
              autoComplete="off"
              value={position.requiredskills}
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
              Edit Position
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPosition