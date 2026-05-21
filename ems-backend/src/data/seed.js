const mongoose = require("mongoose");
const path = require('path')
const dotenv = require("dotenv").config({ path: path.resolve(__dirname, '../../.env') });

const Dept = require("../models/Dept");
const Emp = require("../models/Emp");
const Project = require("../models/Project");
const Attendance = require("../models/Attendance");

const depts = require("./depts");
const generateEmployees = require("./emp");
const generateProjects = require("./project");
const generateAttendance = require("./attendance");


const seedData = async () => {
  try {
    if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    // ❌ Clear old data
    await Dept.deleteMany();
    await Emp.deleteMany();
    await Project.deleteMany();
    await Attendance.deleteMany();

    // ✅ Insert Departments
    const createdDepts = await Dept.insertMany(depts);
    const deptIds = createdDepts.map(d => d._id);

    // ✅ Insert Employees
    const employees = generateEmployees(deptIds);
    const createdEmps = await Emp.insertMany(employees);
    const empIds = createdEmps.map(e => e._id);

    // ✅ Insert Projects
    const projects = generateProjects(deptIds, empIds);
    await Project.insertMany(projects);

    // ✅ Insert Attendance
    const attendance = generateAttendance(empIds);
    await Attendance.insertMany(attendance);

    console.log("✅ Data Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();