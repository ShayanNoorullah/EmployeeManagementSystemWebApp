import express from 'express'
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import sql from 'mysql';

const router = express.Router()

router.post("/employee_login", (req, res) => {
  const sql = "SELECT * FROM employee WHERE email = ?";
  con.query(sql, [req.body.email], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Database error." });
      if (result.length === 0) {
          return res.json({ loginStatus: false, Error: "Email not found." });
      }
      // Verify password using bcrypt
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
          if (err || !response) {
              return res.json({ loginStatus: false, Error: "Incorrect password." });
          }
          // Generate JWT
          const email = result[0].email;
          const token = jwt.sign(
              { role: "employee", email: email, id: result[0].id },
              "jwt_secret_key",
              { expiresIn: "1d" }
          );
          res.cookie('token', token); // Save JWT in cookies
          return res.json({ loginStatus: true, id: result[0].id });
      });
  });
});



  router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
  })

  router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
  })

  export {router as EmployeeRouter}