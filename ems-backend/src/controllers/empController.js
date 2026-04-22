const {json} = require('express')
const empService = require('../services/empService')

exports.getEmp = async (req, res, next) => {
    try {
        const depts = await empService.getEmp()
        // console.log("depts: ",depts)
        if(depts.length===0){
            return res.status(200).json(depts)
        }
        res.status(200).json(depts)
    } catch (exception) {
        console.error("Exception", exception)
        return res.status(500).json({ message: "Internal Server Error !!" })
    }
}

exports.createEmp = async (req, res, next) => {
    try {
        const emp = await empService.createEmp(req.body)
        return res.status(201).json(emp)
    } catch (exception) {
        console.error("Exception", exception)
        return res.status(500).json({ message: "Internal Server Error !!" })
    }
}

exports.updateEmp = async (req, res, next) => {
    try {
        const updatedEmp = await empService.updateEmp(req.params.id,req.body)
        if(!updatedEmp){
            return res.status(404).json({message:"Employee not found !!"})
        }
        return res.status(200).json({data:updatedEmp,message:"Employee Updated Successfully !!"})
    } catch (exception) {
        console.error("Exception", exception)
        return res.status(500).json({ message: "Internal Server Error !!" })
    }
}

exports.deleteEmp = async (req, res, next) => {
    try {
        const {id} = req.params
        const deletedEmp = await empService.deletedEmp(id)
        // console.log("deleted Emp: ",deletedEmp)
        if(!deletedEmp){
            return res.status(404).json({message:"Employee Not Found !!"})
        }
        return res.status(200).json({message:"Employee Deleted Successfully !!"})
    } catch (exception) {
         console.error("Exception", exception)
        return res.status(500).json({ message: "Internal Server Error !!" })
    }
}