import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        department_id: "",
        meeting_id: "",
        position_id: ""
      });
      const [department, setDepartment] = useState([]);
      const [meetings, setMeeting] = useState([]);
      const [position, setPosition] = useState([]);
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
      }, []);

        useEffect(() => {
          axios
            .get("http://localhost:3000/auth/meetings")
            .then((result) => {
              if (result.data.Status) {
                setMeeting(result.data.Result);
              } else {
                alert(result.data.Error);
              }
            })
            .catch((err) => console.log(err));
          }, []);
        
        useEffect(() => {
          axios
            .get("http://localhost:3000/auth/position")
            .then((result) => {
              if (result.data.Status) {
                setPosition(result.data.Result);
              } else {
                alert(result.data.Error);
              }
            })
            .catch((err) => console.log(err));
        }, []);

        
        useEffect(() => {
        axios.get('http://localhost:3000/auth/employee/'+id)
        .then(result => {
            setEmployee({
                ...employee,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                address: result.data.Result[0].address,
                salary: result.data.Result[0].salary,
                department_id: result.data.Result[0].department_id,
                meeting_id: result.data.Result[0].meeting_id,
                position_id: result.data.Result[0].position_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_employee/'+id, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/employee')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="department" className="form-label">
              Department
            </label>
            <select name="department" id="department" className="form-select"
                onChange={(e) => setEmployee({...employee, department_id: e.target.value})}>
                  <option value="">Select Department</option>
              {department.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="meeting" className="form-label">
              Meeting
            </label>
            <select
              name="meeting"
              id="meeting"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, meeting_id: e.target.value })
              }
            >
              <option value="">Select Meeting</option>
              {meetings.map((c) => {
                return <option value={c.id}>{c.title}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="position" className="form-label">
              Position
            </label>
            <select
              name="position"
              id="position"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, position_id: e.target.value })
              }
            >
              <option value="">Select Position</option>
              {position.map((c) => {
                return <option value={c.id}>{c.postitle}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee