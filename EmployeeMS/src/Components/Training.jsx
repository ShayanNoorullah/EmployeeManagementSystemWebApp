import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Training = () => {

    const [training, setTraining] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/training')
        .then(result => {
            if(result.data.Status) {
                setTraining(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_training/'+id)
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
            <h3>Ongoing Trainings Information</h3>
        </div>
        <Link to="/dashboard/add_training" className='btn btn-success'>
        Add Training
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Training Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        training.map(c => (
                            <tr>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>{c.startdate}</td>
                                <td>{c.duration}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_training/` + c.id}
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

export default Training