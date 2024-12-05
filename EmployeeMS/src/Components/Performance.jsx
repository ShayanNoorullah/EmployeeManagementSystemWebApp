import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Performance = () => {

    const [performance, setPerformance] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/performance')
        .then(result => {
            if(result.data.Status) {
                setPerformance(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_performance/'+id)
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
            <h3>Performance Review List</h3>
        </div>
        <Link to="/dashboard/add_performance" className='btn btn-success'>
        Add Performance Review
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Review Date</th>
                        <th>Ratings</th>
                        <th>Feedback</th>
                        <th>Goals</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        performance.map(c => (
                            <tr>
                                <td>{c.reviewdate}</td>
                                <td>{c.ratings}</td>
                                <td>{c.feedback}</td>
                                <td>{c.goals}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_performance/` + c.id}
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

export default Performance