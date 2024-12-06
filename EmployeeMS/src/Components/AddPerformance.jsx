import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPerformance = () => {
    const [performance, setPerformance] = useState({
        reviewdate:"",
        ratings:"",
        feedback:"",
        goals:"",
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
        
        axios.post('http://localhost:3000/auth/add_performance', {
            reviewdate: performance.reviewdate,
            ratings: performance.ratings,
            feedback: performance.feedback,
            goals: performance.goals,
            emp_id: performance.emp_id
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/performance')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Performance Review</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputReviewDate" className="form-label">
              Review Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputReviewDate"
              placeholder="Enter Review Date"
              onChange={(e) =>
                setPerformance({ ...performance, reviewdate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputRatings" className="form-label">
              Ratings
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRatings"
              placeholder="Enter Ratings Number"
              onChange={(e) =>
                setPerformance({ ...performance, ratings: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputFeedback" className="form-label">
              Feedback
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputFeedback"
              placeholder="Enter Feedback"
              onChange={(e) =>
                setPerformance({ ...performance, feedback: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputGoals" className="form-label">
              Goals
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputGoals"
              placeholder="Enter Goals"
              onChange={(e) =>
                setPerformance({ ...performance, goals: e.target.value })
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
                setPerformance({ ...performance, emp_id: e.target.value })
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
              Add Performance Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPerformance