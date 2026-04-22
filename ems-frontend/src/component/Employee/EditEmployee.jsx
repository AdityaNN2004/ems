import React from 'react'
import { useState } from 'react';
import { editEmp } from '../../services/empService';
import { useParams,useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function EditEmployee() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState();
    const [joiningDate, setJoiningDate] = useState();
    const {id} = useParams()
    const navigate = useNavigate()

    const editEmployee = async ()=>{
    const body = {name,email,role,salary,joiningDate}
    const response = await editEmp(id,body)
    if(response.status === 404){
        toast.error("Employee Not Found !!")
    }
    if(response.status === 200){
        toast.success("Updated Employee Successfully !!")
        navigate('/emp')
    }
  }
  return (
<div className="d-flex justify-content-center align-items-center vh-100">
      {/* Added style={{ maxWidth: '500px' }} to keep the form compact */}
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Update Employee</h3>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Location"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            placeholder="Enter Role"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="salary"
            placeholder="Enter Salary"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="joiningDate" className="form-label">
            Joining Date
          </label>
          <input
            type="date"
            className="form-control"
            id="joiningDate"
            placeholder="Enter Joining Date"
            onChange={(e) => setJoiningDate(e.target.value)}
          />
        </div>

        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={editEmployee}
          >
            Update Employee
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee


