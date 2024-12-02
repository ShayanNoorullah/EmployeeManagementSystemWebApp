import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import path from "path";
import sql from 'mysql';
const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie('token', token)
      return res.json({ loginStatus: true });
    } else {
        return res.json({ loginStatus: false, Error:"wrong email or password" });
    }
  });
});

//DEPARTMENT:
router.post('/add_department', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO department 
    (name,location,numberofemployees) 
    VALUES (?)`;
    const values = [
        req.body.name,
        req.body.location,
        req.body.numberofemployees
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/department', (req, res) => {
    const sql = "SELECT * FROM department";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//PAYROLL:
router.post('/add_payroll', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO payroll 
    (basicsalary,bonus,deduction,netsalary,paydate,payperiod) 
    VALUES (?)`;
    const values = [
        req.body.basicsalary,
        req.body.bonus,
        req.body.deduction,
        req.body.netsalary,
        req.body.paydate,
        req.body.payperiod
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/payroll', (req, res) => {
    const sql = "SELECT * FROM payroll";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//PERFORMANCE REVIEW:
router.post('/add_performance', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO performance 
    (reviewdate,ratings,feedback,goals) 
    VALUES (?)`;
    const values = [
        req.body.reviewdate,
        req.body.ratings,
        req.body.feedback,
        req.body.goals,
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/performance', (req, res) => {
    const sql = "SELECT * FROM performance";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//LEAVE REQUEST:
router.post('/add_leaves', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO leaves
    (type,startdate,enddate,reason) 
    VALUES (?)`;
    const values = [
        req.body.type,
        req.body.startdate,
        req.body.enddate,
        req.body.reason,
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/leaves', (req, res) => {
    const sql = "SELECT * FROM leaves";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//MARK ATTENDANCE:
router.post('/add_attendance', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO attendance
    (date,timein,duration) 
    VALUES (?)`;
    const values = [
        req.body.date,
        req.body.timein,
        req.body.duration,
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/attendance', (req, res) => {
    const sql = "SELECT * FROM attendance";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//ADD TRAINING DETAILS:
router.post('/add_training', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO training
    (name,description,startdate,duration) 
    VALUES (?)`;
    const values = [
        req.body.name,
        req.body.description,
        req.body.startdate,
        req.body.duration
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/training', (req, res) => {
    const sql = "SELECT * FROM training";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//ADD EMPLOYEE BENEFITS:
router.post('/add_benefits', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO benefits
    (type,startdate,duration) 
    VALUES (?)`;
    const values = [
        req.body.type,
        req.body.startdate,
        req.body.duration
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/benefits', (req, res) => {
    const sql = "SELECT * FROM benefits";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//INITIATE MEETINGS:
router.post('/add_meetings', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO meetings
    (title,description,date,starttime,duration,location,agenda) 
    VALUES (?)`;
    const values = [
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.starttime,
        req.body.duration,
        req.body.location,
        req.body.agenda
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/meetings', (req, res) => {
    const sql = "SELECT * FROM meetings";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//INITIATE DISCIPLINARY ACTIONS:
router.post('/add_disciplinaryaction', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO disciplinaryaction
    (type,dateofaction,reason) 
    VALUES (?)`;
    const values = [
        req.body.type,
        req.body.dateofaction,
        req.body.reason
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/disciplinaryaction', (req, res) => {
    const sql = "SELECT * FROM disciplinaryaction";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


//MANAGE POSITIONS:
router.post('/add_position', express.urlencoded({ extended: true }),  (req, res) => {
    const sql =`INSERT INTO empposition
    (postitle,description,minsalary,maxsalary,requiredskills) 
    VALUES (?)`;
    const values = [
        req.body.postitle,
        req.body.description,
        req.body.minsalary,
        req.body.maxsalary,
        req.body.requiredskills
    ];
    con.query(sql, [values], (err, result) => {
        if(err){
            console.error("SQL Error:", err);
            return res.json({Status: false, Error: "Query Error"})}
        return res.json({Status: true})
    })
})

router.get('/position', (req, res) => {
    const sql = "SELECT * FROM empposition";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

// image upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end imag eupload 

router.post('/add_employee',upload.single('image'), (req, res) => {
    const sql = `INSERT INTO employee 
    (name,email,password, address, salary,image, department_id) 
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.body.salary, 
            req.file.filename,
            req.body.department_id
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err})
            return res.json({Status: true})
        })
    })
})

router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee 
        set name = ?, email = ?, salary = ?, address = ?, department_id = ? 
        Where id = ?`
    const values = [
        req.body.name,
        req.body.email,
        req.body.salary,
        req.body.address,
        req.body.department_id
    ]
    con.query(sql,[...values, id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_count', (req, res) => {
    const sql = "select count(id) as admin from admin";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee_count', (req, res) => {
    const sql = "select count(id) as employee from employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/salary_count', (req, res) => {
    const sql = "select sum(salary) as salaryOFEmp from employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_records', (req, res) => {
    const sql = "select * from admin"
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})

export { router as adminRouter };