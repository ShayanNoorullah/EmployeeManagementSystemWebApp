import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPayroll = () => {
    const [payroll, setPayroll] = useState({
        basicsalary:"",
        bonus:"",
        deduction:"",
        netsalary:"",
        paydate:"",
        payperiod:"",
        emp_id:""
    }, [])

    const navigate = useNavigate()

    const [employee, setEmployee] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3000/auth/employee")
        .then((result) => {
          if (result.data.Status) {
            setEmployee(result.data.Result);
          } else {
            alert(result.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3000/auth/add_payroll', {
            basicsalary: payroll.basicsalary,
            bonus: payroll.bonus,
            deduction: payroll.deduction,
            netsalary: payroll.netsalary,
            paydate: payroll.paydate,
            payperiod: payroll.payperiod,
            emp_id: payroll.emp_id
        })
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/payroll')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
<div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Payroll</h3>
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
              onChange={(e) =>
                setPayroll({ ...payroll, payperiod: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="employee" className="form-label">
              Employee
            </label>
            <select
              name="employee"
              id="employee"
              className="form-select"
              onChange={(e) =>
                setPayroll({ ...payroll, emp_id: e.target.value })
              }
            >
              <option value="">Select Employee</option>
              {employee.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPayroll