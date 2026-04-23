const Attendance = require('../models/Attendance')

const getAttendance = () => Attendance.find().populate('_id')
const createAttendance = (data) => Attendance.create(data)
const updateAttendance = (id,data) => Attendance.findByIdAndUpdate(id,data)
const deleteAttendance = (id)=> Attendance.findByIdAndDelete(id)

module.exports = {
    getAttendance,
    createAttendance,
    updateAttendance,
    deleteAttendance
}