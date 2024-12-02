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