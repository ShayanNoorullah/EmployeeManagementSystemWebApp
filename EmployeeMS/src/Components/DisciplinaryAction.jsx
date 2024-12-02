import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DisciplinaryAction = () => {

    const [disciplinaryaction, setDisciplinaryAction] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/disciplinaryaction')
        .then(result => {
            if(result.data.Status) {
                setDisciplinaryAction(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Disciplinary Action Initiated</h3>
        </div>
        <Link to="/dashboard/add_disciplinaryaction" className='btn btn-success'>
        Initiate Disciplinary Action
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Disciplinary Action Type</th>
                        <th>Date of Action</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        disciplinaryaction.map(c => (
                            <tr>
                                <td>{c.type}</td>
                                <td>{c.dateofaction}</td>
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

export default DisciplinaryAction