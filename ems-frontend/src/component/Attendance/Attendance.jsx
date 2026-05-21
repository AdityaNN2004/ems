import React, { useEffect, useState } from "react";
import {
  getAttendanceList,
  removeAttendance,
} from "../../services/attendanceService";
import { useNavigate } from "react-router";
import { toast,ToastContainer } from "react-toastify";
import Navbar from "../../Pages/Navbar.jsx"

function Attendance() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getAttendance()
  },[])
  const getAttendance = async () => {
    const response = await getAttendanceList();
    const attendance = response.data.data
    console.log("response: ",response)
    console.log("attendance: ",attendance)
    try{
      if (attendance && attendance.length>0) 
        {
          toast.success("Fetched Attendance Successfully!!");
          setData(attendance);
        } else 
        {
          setData([])
          toast.info("No attendance records found.");
        }
      }catch(error){
        toast.error("Failed to fetch records !!")
        console.error("Error: ",error)
      }
  };
  const addAttendance = () => {
    navigate("/attendance-add");
  };

  const deleteAttendance = async(dt) => {
    const id  = dt._id;
    const response = await removeAttendance(id);
    if (response.status === 200) {
        toast.success("Attendance Deleted Successfully!!");
        setData(data.filter((item) => item._id !== id));
    } else {
        toast.error("Error While Deleting Attendance!!");
    }
  };
  

  const updateAttendance = (dt) => {
    navigate(`/attendance-edit/${dt._id}`);
  };
  return (
    <>
    <Navbar/>
      <div>
        <ToastContainer position="top-right"></ToastContainer>
      </div>
      <div className="container m-4">
        <button
          type="button"
          onClick={getAttendance}
          className="m-3 btn btn-primary"
        >
          Get Attendance
        </button>
        <button
          type="button"
          onClick={addAttendance}
          className="m-3 btn btn-primary"
        >
          Add Attendance
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <h1>Attendance List</h1>
      </div>
      <div className="m-5 border">
        <table className="table table-info table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Employee Id</th>
              <th scope="col">Date</th>
              <th scope="col">CheckIn</th>
              <th scope="col">CheckOut</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((dt) => (
                <tr key={dt._id} className="text-center">
                  <td>{dt.empId?._id || dt.empId}</td>
                  <td>{dt.date}</td>
                  <td>{dt.checkIn}</td>
                  <td>{dt.checkOut}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteAttendance(dt)}>
                      Remove
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-warning" onClick={() => updateAttendance(dt)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Attendance;
