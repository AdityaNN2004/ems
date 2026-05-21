const Attendance = require('../models/Attendance')

const getAttendance = (skip=0,limit=10) => Attendance.find().populate('empId').sort({createdAt:1}).skip(skip).limit(limit)
const countDocuments = ()=> Attendance.countDocuments()
const createAttendance = (data) => Attendance.create(data)
const updateAttendance = (id,data) => Attendance.findByIdAndUpdate(id,data)
const deleteAttendance = (id)=> Attendance.findByIdAndDelete(id)

module.exports = {
    getAttendance,
    countDocuments,
    createAttendance,
    updateAttendance,
    deleteAttendance
}