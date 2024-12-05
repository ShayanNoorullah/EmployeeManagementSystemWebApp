import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditMeetings = () => {
    const {id} = useParams()
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

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/meetings/'+id)
        .then(result => {
            setMeetings({
                ...meetings,
                title: result.data.Result[0].title,
                description: result.data.Result[0].description,
                date: result.data.Result[0].date,
                starttime: result.data.Result[0].starttime,
                duration: result.data.Result[0].duration,
                location: result.data.Result[0].location,
                agenda: result.data.Result[0].agenda
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_meetings/'+id, meetings)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/meetings')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Meetings</h3>
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
              autoComplete="off"
              value={meetings.title}
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
              autoComplete="off"
              value={meetings.description}
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
              autoComplete="off"
              value={meetings.date}
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
              autoComplete="off"
              value={meetings.starttime}
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
              autoComplete="off"
              value={meetings.duration}
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
              autoComplete="off"
              value={meetings.location}
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
              autoComplete="off"
              value={meetings.agenda}
              onChange={(e) =>
                setMeetings({ ...meetings, agenda: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditMeetings