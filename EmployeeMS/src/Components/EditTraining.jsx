import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTraining = () => {
    const {id} = useParams()
    const [training, setTraining] = useState({
        name:"",
        description:"",
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

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/training/'+id)
        .then(result => {
            setTraining({
                ...training,
                name: result.data.Result[0].name,
                description: result.data.Result[0].description,
                startdate: result.data.Result[0].startdate,
                duration: result.data.Result[0].duration,
                emp_id: result.data.Result[0].emp_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_training/'+id, training)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/training')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Training</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Training Name"
              autoComplete="off"
              value={training.name}
              onChange={(e) =>
                setTraining({ ...training, name: e.target.value })
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
              placeholder="Enter Training Description"
              autoComplete="off"
              value={training.description}
              onChange={(e) =>
                setTraining({ ...training, description: e.target.value })
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
              placeholder="Enter Training Start Date"
              autoComplete="off"
              value={training.startdate}
              onChange={(e) =>
                setTraining({ ...training, startdate: e.target.value })
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
              placeholder="Enter Training Duration"
              autoComplete="off"
              value={training.duration}
              onChange={(e) =>
                setTraining({ ...training, duration: e.target.value })
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
                setTraining({ ...training, emp_id: e.target.value })
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
              Edit Training Details
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTraining