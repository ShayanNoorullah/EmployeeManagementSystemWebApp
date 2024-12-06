import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Project = () => {

    const [project, setProject] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/project')
        .then(result => {
            if(result.data.Status) {
                setProject(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_project/'+id)
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
            <h3>Project List</h3>
        </div>
        <Link to="/dashboard/add_project" className='btn btn-success'>
        Add Project
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start_date</th>
                        <th>End_date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        project.map(c => (
                            <tr>
                                <td>{c.p_name}</td>
                                <td>{c.description}</td>
                                <td>{c.startdate}</td>
                                <td>{c.enddate}</td>
                                <td>
                                <Link
                                    to={`/dashboard/edit_project/` + c.id}
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

export default Project
