import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createAttendance } from "../../services/attendanceService";
import { toast } from "react-toastify";
function AddAttendance() {
  const [empId, setEmpId] = useState("");
  const [date, setDate] = useState();
  const [checkin, setCheckIn] = useState();
  const [checkout, setCheckOut] = useState();
  const navigate = useNavigate();
  const addAttendance = async () => {
    const body = { empId, date, checkin, checkout };
    const response = await createAttendance(body);
    if (response.status === 201) {
      toast.success("Attendance Added Successfully!!");
      navigate("/attendance");
    } else toast.error("Error while adding attendance.....");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* Added style={{ maxWidth: '500px' }} to keep the form compact */}
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Add New Employee</h3>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            className="form-control"
            id="empId"
            placeholder="Enter your emp id"
            onChange={(e) => setEmpId(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Check In
          </label>
          <input
            type="date"
            className="form-control"
            id="checkin"
            placeholder="Enter check in"
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Check Out
          </label>
          <input
            type="date"
            className="form-control"
            id="checkout"
            placeholder="Enter check out"
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addAttendance}
          >
            Add Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAttendance;
