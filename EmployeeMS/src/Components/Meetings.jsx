import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Meetings = () => {

    const [meetings, setMeetings] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/meetings')
        .then(result => {
            if(result.data.Status) {
                setMeetings(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_meetings/'+id)
        .then(result => {
            if(result.data.Status) {
                window.location.reload()
            } else {
                alert(result.data.Error)
            }
        })
    }
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Meeting Details</h3>
        </div>
        <Link to="/dashboard/add_meetings" className='btn btn-success'>
        Initiate Meeting
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Meeting Title</th>
                        <th>Meeting Description</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Duration</th>
                        <th>Location</th>
                        <th>Agenda</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        meetings.map(c => (
                            <tr>
                                <td>{c.title}</td>
                                <td>{c.description}</td>
                                <td>{c.date}</td>
                                <td>{c.starttime}</td>
                                <td>{c.duration}</td>
                                <td>{c.location}</td>
                                <td>{c.agenda}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_meetings/` + c.id}
                                className="btn btn-info btn-sm me-2"
                                >
                                Edit
                                </Link>
                                <button
                                className="btn btn-warning btn-sm"
                                onClick={() => handleDelete(c.id)}
                                >
                                Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Meetings