import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { editDepartment } from "../../services/deptService";
import { toast } from "react-toastify";
import { useParams } from "react-router";


function EditDepartment() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [hod, setHod] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()
  const editDept = async () => {
    try {
      const response = await editDepartment(
        id,
        name,
        location,
        budget,
        hod,
        navigate,
      );
      toast.success(response.message);
      navigate("/dept");
    } catch (exception) {
      toast.error("Internal Server Error");
      console.error("Exception", exception);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Added style={{ maxWidth: '500px' }} to keep the form compact */}
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Edit Department</h3>

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
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="budget" className="form-label">
            Budget
          </label>
          <input
            type="number"
            className="form-control"
            id="budget"
            placeholder="Enter Budget"
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hod" className="form-label">
            HOD
          </label>
          <input
            type="text"
            className="form-control"
            id="hod"
            placeholder="Enter your HOD name"
            onChange={(e) => setHod(e.target.value)}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="button" className="btn btn-primary" onClick={editDept}>
            Edit Department
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDepartment;
