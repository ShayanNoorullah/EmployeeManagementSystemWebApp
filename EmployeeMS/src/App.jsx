import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Department from './Components/Department'
import Position from './Components/Position'
import AddPosition from './Components/Addposition'
import AddDepartment from './Components/AddDepartment'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import EditPosition from './Components/EditPosition'
import EditDepartment from './Components/EditDepartment'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import PrivateRoute from './Components/PrivateRoute'
import Payroll from './Components/Payroll'
import AddPayroll from './Components/AddPayroll'
import Performance from './Components/Performance'
import AddPerformance from './Components/AddPerformance'
import Leaves from './Components/Leaves'
import AddLeaves from './Components/AddLeaves'
import AddAttendance from './Components/AddAttendance'
import Attendance from './Components/Attendance'
import Training from './Components/Training'
import AddTraining from './Components/AddTraining'
import Benefits from './Components/Benefits'
import AddBenefits from './Components/AddBenefits'
import Meetings from './Components/Meetings'
import AddMeetings from './Components/AddMeetings'
import DisciplinaryAction from './Components/DisciplinaryAction'
import AddDisciplinaryAction from './Components/AddDisciplinaryAction'





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/department' element={<Department />}></Route>
        <Route path='/dashboard/position' element={<Position />}></Route>
        <Route path='/dashboard/payroll' element={<Payroll />}></Route>
        <Route path='/dashboard/performance' element={<Performance />}></Route>
        <Route path='/dashboard/leaves' element={<Leaves />}></Route>
        <Route path='/dashboard/attendance' element={<Attendance />}></Route>
        <Route path='/dashboard/training' element={<Training />}></Route>
        <Route path='/dashboard/benefits' element={<Benefits />}></Route>
        <Route path='/dashboard/meetings' element={<Meetings />}></Route>
        <Route path='/dashboard/disciplinaryaction' element={<DisciplinaryAction />}></Route>
        <Route path='/dashboard/add_department' element={<AddDepartment />}></Route>
        <Route path='/dashboard/add_position' element={<AddPosition/>}></Route>
        <Route path='/dashboard/add_payroll' element={<AddPayroll />}></Route>
        <Route path='/dashboard/add_performance' element={<AddPerformance />}></Route>
        <Route path='/dashboard/add_leaves' element={<AddLeaves />}></Route>
        <Route path='/dashboard/add_attendance' element={<AddAttendance />}></Route>
        <Route path='/dashboard/add_training' element={<AddTraining />}></Route>
        <Route path='/dashboard/add_benefits' element={<AddBenefits />}></Route>
        <Route path='/dashboard/add_meetings' element={<AddMeetings />}></Route>
        <Route path='/dashboard/add_disciplinaryaction' element={<AddDisciplinaryAction />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
        <Route path='/dashboard/edit_position/:id' element={<EditPosition />} />
        <Route path='/dashboard/edit_department/:id' element={<EditDepartment />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App