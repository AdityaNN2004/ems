import React, { useState } from "react";
// import { removeDepartment } from "../../services/deptService";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { getEmps, removeEmp } from "../../services/empService";

function Employee() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const addEmp = async () => {
    navigate("/emp-add");
  };
  
  const getEmp = async () => {
    try {
      const response = await getEmps();
      console.log("response ", response);

      // 1. Check if the response actually contains data
      if (!response.data || response.data.length === 0) {
        setData([]); // Clear state if nothing found
        toast.warning("No Employee Found");
        return;
      }

      // 2. If data exists, update state and show success
      setData(response.data);

      if (response.status === 200) {
        toast.success("Fetched Employee Successfully !!");
      }
    } catch (exception) {
      console.error(exception);
      toast.error("Failed to fetch employees");
    }
  };
  const updateEmp = async (emp) => {
    navigate(`/emp-edit/${emp._id}`);
  };
  
  const deleteEmp = async (emp) => {
    try{
        const response = await removeEmp(emp._id)
        console.log("Message: ",response.message)
        console.log("Status: ",response.status)
      if(response.status === 200){
        toast.success("Employee Deleted Successfully !!");
        setData(prevData => prevData.filter(item => item._id !== emp._id));
      }
    }
    catch(error){
        console.log("Error: ",error)
        toast.error("Error While Deleting....")
    }
  };
  return (
    <>
      <div>
        <ToastContainer position="top-right"></ToastContainer>
      </div>
      <div className="container m-4">
        <button type="button" onClick={getEmp} className="m-3 btn btn-primary">
          Get Employee
        </button>
        <button type="button" onClick={addEmp} className="m-3 btn btn-primary">
          Add Employee
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <h1>Employee List</h1>
      </div>
      <div className="m-5 border">
        <table className="table table-info table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Salary</th>
              <th scope="col">Joining Date</th>
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
                  <td>{dt.email}</td>
                  <td>{dt.role}</td>
                  <td>{dt.salary}</td>
                  <td>{dt.joiningDate}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEmp(dt)}
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
                        onClick={() => updateEmp(dt)}
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

export default Employee;
