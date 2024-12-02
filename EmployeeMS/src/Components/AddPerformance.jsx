import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPerformance = () => {
    const [performance, setPerformance] = useState({
        reviewdate:"",
        ratings:"",
        feedback:"",
        goals:"",
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_performance', {
            reviewdate: performance.reviewdate,
            ratings: performance.ratings,
            feedback: performance.feedback,
            goals: performance.goals,
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