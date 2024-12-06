import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPerformance = () => {
    const {id} = useParams()
    const [performance, setPerformance] = useState({
        reviewdate:"",
        ratings:"",
        feedback:"",
        goals:"",
        emp_id:""
    }, [])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/performance/'+id)
        .then(result => {
            setPerformance({
                ...performance,
                reviewdate: result.data.Result[0].reviewdate,
                ratings: result.data.Result[0].ratings,
                feedback: result.data.Result[0].feedback,
                goals: result.data.Result[0].goals,
                emp_id: result.data.Result[0].emp_id
            })
        }).catch(err => console.log(err))
    }, [])


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
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_performance/'+id, performance)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/performance')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Performance</h3>
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
              autoComplete="off"
              value={performance.reviewdate}
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
              autoComplete="off"
              value={performance.ratings}
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
              autoComplete="off"
              value={performance.feedback}
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
              autoComplete="off"
              value={performance.goals}
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
              {employee.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Performance Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPerformance