import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPayroll = () => {
    const {id} = useParams()
    const [payroll, setPayroll] = useState({
        basicsalary:"",
        bonus:"",
        deduction:"",
        netsalary:"",
        paydate:"",
        payperiod:""
    }, [])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/payroll/'+id)
        .then(result => {
            setPayroll({
                ...payroll,
                basicsalary: result.data.Result[0].basicsalary,
                bonus: result.data.Result[0].bonus,
                deduction: result.data.Result[0].deduction,
                netsalary: result.data.Result[0].netsalary,
                paydate: result.data.Result[0].paydate,
                payperiod: result.data.Result[0].payperiod
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_payroll/'+id, payroll)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/payroll')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Payroll</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label htmlFor="inputBasicsalary" className="form-label">
              Basic Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputBasicSalary"
              placeholder="Enter Basic Salary"
              autoComplete="off"
              value={payroll.basicsalary}
              onChange={(e) =>
                setPayroll({ ...payroll, basicsalary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputBonus" className="form-label">
              Bonus
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputBonus"
              placeholder="Enter Bonus"
              autoComplete="off"
              value={payroll.bonus}
              onChange={(e) =>
                setPayroll({ ...payroll, bonus: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDeduction" className="form-label">
              Deduction
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDeduction"
              placeholder="Enter Deduction"
              autoComplete="off"
              value={payroll.deduction}
              onChange={(e) =>
                setPayroll({ ...payroll, deduction: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputNetsalary" className="form-label">
              Net Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputNetsalary"
              placeholder="Enter NetSalary"
              autoComplete="off"
              value={payroll.netsalary}
              onChange={(e) =>
                setPayroll({ ...payroll, netsalary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPaydate" className="form-label">
              PayDate
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputPaydate"
              placeholder="Enter Pay Date"
              autoComplete="off"
              value={payroll.paydate}
              onChange={(e) =>
                setPayroll({ ...payroll, paydate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPayperiod" className="form-label">
              Pay Period 
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPayperiod"
              placeholder="Enter Pay Period in Days"
              autoComplete="off"
              value={payroll.payperiod}
              onChange={(e) =>
                setPayroll({ ...payroll, payperiod: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPayroll