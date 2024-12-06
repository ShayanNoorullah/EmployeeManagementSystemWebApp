import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Task = () => {

    const [task, setTask] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/task')
        .then(result => {
            if(result.data.Status) {
                setTask(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_task/'+id)
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
            <h3>Task List</h3>
        </div>
        <Link to="/dashboard/add_task" className='btn btn-success'>
        Add Task
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Due_date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.map(c => (
                            <tr>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>{c.duedate}</td>
                                <td>{c.status}</td>
                                <td>
                                <Link
                                to={`/dashboard/edit_task/` + c.id}
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

export default Task