import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddMeetings = () => {
    const [meetings, setMeetings] = useState({
        title:"",
        description: "",
        date: "",
        starttime: "",
        duration:"",
        location: "",
        agenda: ""
    }, [])

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_meetings', {
            title: meetings.title,
            description: meetings.description,
            date: meetings.date,
            starttime: meetings.starttime,
            duration: meetings.duration,
            location: meetings.location,
            agenda: meetings.agenda
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/meetings')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Meeting Details</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputTitle"
              placeholder="Enter Meeting Title"
              onChange={(e) =>
                setMeetings({ ...meetings, title: e.target.value })
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
              onChange={(e) =>
                setMeetings({ ...meetings, description: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDate" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputDate"
              placeholder="Enter Meeting Date"
              onChange={(e) =>
                setMeetings({ ...meetings, date: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputStartTime" className="form-label">
              Start Time
            </label>
            <input
              type="time"
              className="form-control rounded-0"
              id="inputStartTime"
              placeholder="Enter Start Time"
              onChange={(e) =>
                setMeetings({ ...meetings, starttime: e.target.value })
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
              placeholder="Enter Meeting Duration"
              onChange={(e) =>
                setMeetings({ ...meetings, duration: e.target.value })
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
              id="inputLoation"
              placeholder="Enter Meeting Location"
              onChange={(e) =>
                setMeetings({ ...meetings, location: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAgenda" className="form-label">
              Agenda
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAgenda"
              placeholder="Enter Meeting Agenda"
              onChange={(e) =>
                setMeetings({ ...meetings, agenda: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Initiate Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMeetings