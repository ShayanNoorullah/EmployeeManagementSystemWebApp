import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBenefits = () => {
    const {id} = useParams()
    const [benefits, setBenefits] = useState({
        type:"",
        startdate: "",
        duration:"",
    }, [])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/benefits/'+id)
        .then(result => {
            setBenefits({
                ...benefits,
                type: result.data.Result[0].type,
                startdate: result.data.Result[0].startdate,
                duration: result.data.Result[0].duration
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_benefits/'+id, benefits)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/benefits')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Benefits</h3>
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
              autoComplete="off"
              value={benefits.type}
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
              autoComplete="off"
              value={benefits.startdate}
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
              autoComplete="off"
              value={benefits.duration}
              onChange={(e) =>
                setBenefits({ ...benefits, duration: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee Benefits
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBenefits