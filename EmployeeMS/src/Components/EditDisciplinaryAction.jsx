import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDisciplinaryAction = () => {
    const {id} = useParams()
    const [disciplinaryaction, setDisciplinaryAction] = useState({
        type:"",
        dateofaction: "",
        reason: "",
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
        axios.get('http://localhost:3000/auth/disciplinaryaction/'+id)
        .then(result => {
            setDisciplinaryAction({
                ...disciplinaryaction,
                type: result.data.Result[0].type,
                dateofaction: result.data.Result[0].dateofaction,
                reason: result.data.Result[0].reason,
                emp_id: result.data.Result[0].emp_id
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_disciplinaryaction/'+id, disciplinaryaction)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/disciplinaryaction')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Disciplinary Action</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="inputType" className="form-label">
              Action Type
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputType"
              placeholder="Enter type of action"
              autoComplete="off"
              value={disciplinaryaction.type}
              onChange={(e) =>
                setDisciplinaryAction({ ...disciplinaryaction, type: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDateofaction" className="form-label">
              Date of Action
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDateofaction"
              placeholder="Enter Date"
              autoComplete="off"
              value={disciplinaryaction.dateofaction}
              onChange={(e) =>
                setDisciplinaryAction({ ...disciplinaryaction, dateofaction: e.target.value })
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
              value={disciplinaryaction.reason}
              onChange={(e) =>
                setDisciplinaryAction({ ...disciplinaryaction, reason: e.target.value })
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
                setDisciplinaryAction({ ...disciplinaryaction, emp_id: e.target.value })
              }
            >
              {employee.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Disciplinary Action
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditDisciplinaryAction