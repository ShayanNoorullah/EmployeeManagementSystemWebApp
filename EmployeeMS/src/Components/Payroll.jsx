import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Payroll = () => {

    const [payroll, setPayroll] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/payroll')
        .then(result => {
            if(result.data.Status) {
                setPayroll(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Payroll List</h3>
        </div>
        <Link to="/dashboard/add_payroll" className='btn btn-success'>
        Add Payroll
        </Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Basic Salary</th>
                        <th>Bonus</th>
                        <th>Deduction</th>
                        <th>Net Salary</th>
                        <th>Pay Date</th>
                        <th>Pay Period</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payroll.map(c => (
                            <tr>
                                <td>{c.basicsalary}</td>
                                <td>{c.bonus}</td>
                                <td>{c.deduction}</td>
                                <td>{c.netsalary}</td>
                                <td>{c.paydate}</td>
                                <td>{c.payperiod}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Payroll