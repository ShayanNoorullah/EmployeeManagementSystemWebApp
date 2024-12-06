import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditProject = () => {
    const {id} = useParams()
    const [project, setProject] = useState({
        name: "",
        description: "",
        startdate: "",
        enddate: ""
      });
      const navigate = useNavigate()

      useEffect(() => {
        axios.get('http://localhost:3000/auth/project/' + id)
            .then(result => {
                setProject({
                    ...project, 
                    p_name: result.data.Result[0].p_name,
                    description: result.data.Result[0].description,
                    startdate: result.data.Result[0].startdate,
                    enddate: result.data.Result[0].enddate,
                });
            }).catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", project);
        axios.put('http://localhost:3000/auth/edit_project/'+id, project)
        .then(result => {
            console.log("Result:", result.data);
            if(result.data.Status) {
                navigate('/dashboard/project')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Project</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlForfor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Project Name"
              value={project.p_name}
              onChange={(e) =>
                setProject({ ...project, p_name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlForfor="inputdescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputdescription"
              placeholder="Enter Project Description"
              autoComplete="off"
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlForfor="inputstartdate" className="form-label">
              Start_date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputstartdate"
              placeholder="Enter Project Start Date"
              autoComplete="off"
              value={project.startdate}
              onChange={(e) =>
                setProject({ ...project, startdate: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlForfor="inputenddate" className="form-label">
              End_date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputenddate"
              placeholder="Enter Project enddate"
              autoComplete="off"
              value={project.enddate}
              onChange={(e) =>
                setProject({ ...project, enddate: e.target.value })
              }
            />
          </div>
                <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProject
