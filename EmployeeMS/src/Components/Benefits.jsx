import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {

    const [benefits, setBenefits] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/benefits')
        .then(result => {
            if(result.data.Status) {
                setBenefits(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Employee Benefits</h3>
        </div>
        <Link to="/dashboard/add_benefits" className='btn btn-success'>
        Add Employee Benefits
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Benefit Type</th>
                        <th>Start Date</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        benefits.map(c => (
                            <tr>
                                <td>{c.type}</td>
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

export default Benefits