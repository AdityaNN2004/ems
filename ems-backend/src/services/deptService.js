const Dept = require('../models/Dept')

const getDept = () =>Dept.find()
const createDept = (data)=> Dept.create(data)
const editDept = (id,data)=>Dept.findByIdAndUpdate(id,data,{new:true} )
const removeDept = (id)=>Dept.findByIdAndDelete(id)

module.exports = {
    getDept,
    createDept,
    editDept,
    removeDept
}