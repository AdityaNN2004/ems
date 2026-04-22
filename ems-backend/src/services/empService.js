const Emp = require('../models/Emp')

const getEmp = () => Emp.find().populate('deptId').populate('managerId')
const createEmp = (data) => Emp.create(data)
const updateEmp = (id, data) => Emp.findByIdAndUpdate(id, data, { new: true })
const deletedEmp = (id) => Emp.findByIdAndDelete(id)

module.exports = {
    getEmp,
    createEmp,
    updateEmp,
    deletedEmp
}