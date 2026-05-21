const Emp = require('../models/Emp')

// Updated to accept skip and limit, and included sorting/population
const getEmp = (skip = 0, limit = 10) => 
    Emp.find()
        .populate('deptId')
        .populate('managerId')
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit);

// Added this to support the total count in your controller
const countEmps = () => Emp.countDocuments();

const createEmp = (data) => Emp.create(data);

const updateEmp = (id, data) => Emp.findByIdAndUpdate(id, data, { new: true });

const deletedEmp = (id) => Emp.findByIdAndDelete(id);

module.exports = {
    getEmp,
    countEmps, 
    createEmp,
    updateEmp,
    deletedEmp
}
