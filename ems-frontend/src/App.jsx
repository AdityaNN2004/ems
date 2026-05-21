import Department from "./component/Department/Department";
import Test from "./component/test/Test";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDepartment from "./component/Department/AddDepartment";

// Add Navigate to your import statement
import { Link, Routes, Route, Navigate } from "react-router"; 
import EditDepartment from "./component/Department/EditDepartment";
import Employee from "./component/Employee/Employee";
import AddEmployee from "./component/Employee/AddEmployee";
import EditEmployee from "./component/Employee/EditEmployee";
import Project from "./component/Project/Project";
import Attendance from "./component/Attendance/Attendance";
import AddAttendance from "./component/Attendance/AddAttendance";
import EditAttendance from "./component/Attendance/EditAttendance";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      <Routes>
        {/* FIX: Redirect the root path "/" directly to your "/home" view */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        <Route path="/home" element={<Navbar />} />
        <Route path="/dept" element={<Department />} />
        <Route path="/dept-add" element={<AddDepartment />} />
        <Route path="/dept-edit/:id" element={<EditDepartment />} />
        <Route path="/emp" element={<Employee />}/>
        <Route path="/emp-add" element={<AddEmployee />} />
        <Route path="/emp-edit/:id" element={<EditEmployee />} />
        <Route path="/project" element={<Project />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance-add" element={<AddAttendance />} />
        <Route path="/attendance-edit/:id" element={<EditAttendance />} />
      </Routes>
    </>
  );
}

export default App;
