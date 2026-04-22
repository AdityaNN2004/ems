import React, { useState } from "react";
import { removeDepartment } from "../../services/deptService";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";

function Department() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const addDept = async () => {
    navigate("/dept-add");
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/dept");
      setData(response.data);
    } catch (exception) {
      console.error(exception.message);
      toast.error(exception.message);
    }
  };

  const editData = (dept) => {
    // Use the ID from the passed object and REMOVE the colon (:)
    navigate(`/dept-edit/${dept._id}`);
  };
  const removeDept = async (dept) => {
    try {
      const response = removeDepartment(dept._id);
      toast.success(response.message);
    } catch (exception) {
      toast.error(exception);
    }
  };

  fetchData();
  return (
    <>
      <div>
        <ToastContainer position="top-right"></ToastContainer>
      </div>
      <div className="container m-4">
        <button
          type="button"
          onClick={fetchData}
          className="m-3 btn btn-primary"
        >
          Get Departments
        </button>
        <button type="button" onClick={addDept} className="m-3 btn btn-primary">
          Add Department
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <h1>Department List</h1>
      </div>
      <div className="m-5 border">
        <table className="table table-info table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Budget</th>
              <th scope="col">HOD</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((dt) => {
              return (
                <tr key={dt._id} className="text-center">
                  <td>{dt.name}</td>
                  <td>{dt.location}</td>
                  <td>{dt.budget}</td>
                  <td>{dt.hod}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeDept(dt)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      {/* 2. Wrap the call in an arrow function to pass the current 'dt' */}
                      <button
                        className="btn btn-warning"
                        onClick={() => editData(dt)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Department;
