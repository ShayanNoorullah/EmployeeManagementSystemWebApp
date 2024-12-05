import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddDisciplinaryAction = () => {
    const [disciplinaryaction, setDisciplinaryAction] = useState({
        type:"",
        dateofaction: "",
        reason: "",
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_disciplinaryaction', {
            type: disciplinaryaction.type,
            dateofaction: disciplinaryaction.dateofaction,
            reason: disciplinaryaction.reason,
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/disciplinaryaction')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Initiate Disciplinary Action</h3>
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
              onChange={(e) =>
                setDisciplinaryAction({ ...disciplinaryaction, reason: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Initiate Disciplinary Action
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDisciplinaryAction