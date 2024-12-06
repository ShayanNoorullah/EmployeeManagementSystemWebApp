import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [project, setProject] = useState({
    p_name: "",
    description: "",
    startdate: "",
    enddate: ""
  }, []);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3000/auth/add_project', {
        p_name: project.p_name,
        description: project.description,
        startdate: project.startdate,
        enddate: project.enddate
    })
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/project')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Project</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Project Name"
              onChange={(e) =>
                setProject({ ...project,  p_name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputdescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputdescription"
              placeholder="Enter Project Description"
              autoComplete="off"
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputstartdate" className="form-label">
              Start_date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputstartdate"
              placeholder="Enter Start Date"
              onChange={(e) =>
                setProject({ ...project, startdate: e.target.value })
              }
            />
            <label htmlFor="inputenddate" className="form-label">
              End_date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputenddate"
              placeholder="Enter End Date"
              autoComplete="off"
              onChange={(e) =>
                setProject({ ...project, enddate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
