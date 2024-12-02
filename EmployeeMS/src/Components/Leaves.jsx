import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Leaves = () => {

    const [leaves, setLeaves] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/leaves')
        .then(result => {
            if(result.data.Status) {
                setLeaves(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Current Leaves List</h3>
        </div>
        <Link to="/dashboard/add_leaves" className='btn btn-success'>
        Add Leave for Employee
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaves.map(c => (
                            <tr>
                                <td>{c.type}</td>
                                <td>{c.startdate}</td>
                                <td>{c.enddate}</td>
                                <td>{c.reason}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Leaves