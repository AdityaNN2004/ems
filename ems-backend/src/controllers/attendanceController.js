const {json} = require('express')
const attendanceService = require('../services/attendanceService')


exports.getAttendance = async (req,res,next) => {
    try{
        const attendance = await attendanceService.getAttendance()
        console.log("Attendance: ",attendance)
        if(attendance.length === 0){
            return res.status(200).json({message:"There is nothing...."})
        }
        res.status(200).json(attendance)
    }catch(error){
        console.error("Error: ",error)
        res.status(500).json({message:"Internal Server Error......"})
    }        
}

exports.createAttendance = async (req,res,next) => {
    try{
        const response = await attendanceService.createAttendance(req.body)
        res.status(201).json({message:"Attendance Added Successfully !!"})
    }catch(error)
    {
        console.error("Error: ",error)
        res.status(500).json({message:"Internal Server Error......"})
    }
}

exports.updateAttendance = async (req,res,next)=>{
    try{
        const response = await attendanceService.updateAttendance(req.params.id,req.body)
        if(!response){
            return res.status(404).json({message:"Not Found !!"})
        }
        res.status(201).json({message:"Attendance Updated Successfully !!"})
    }catch(error){
        console.error("Error: ",error)
        res.status(500).json({message:"Internal Server Error......"})
    }
}

exports.deleteAttendance = async (req,res,next)=>{
    try{
        const response = await attendanceService.deleteAttendance(req.params.id)
        if(!response){
            return res.status(404).json({message:"Not Found !!"})
        }
        res.status(200).json({message:"Attendance Deleted Successfully !!"})
    }catch(error){
        console.error('Error: ',error)
        res.status(500).json({message:"Internal Server Error......"})
    }
}