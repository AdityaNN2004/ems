const {json} = require('express')
const attendanceService = require('../services/attendanceService')
// const { paginate } = require('mongoose-paginate-v2')


exports.getAttendance = async (req,res,next) => {
    try{
        const page = parseInt(req.query.page) | 1
        const limit = parseInt(req.query.limit) || 10 
        const skip = (page-1)*limit

        const [attendance,total] = await Promise.all([
            attendanceService.getAttendance(skip,limit),
            attendanceService.countDocuments()
        ])

        // const attendance = await attendanceService.getAttendance()
        // console.log("Attendance: ",attendance)
        if(attendance.length === 0){
            return res.status(200).json({message:"There is nothing...."})
        }
        res.status(200).json({
            success:true,
            data:attendance,
            pagination: {
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
                limit: limit
            }
        })
    }catch(error){
        console.error("Error: ",error)
        res.status(500).json({message:"Internal Server Error......"})
    }        
}

exports.createAttendance = async (req,res,next) => {
    try{
        const attendance = await attendanceService.createAttendance(req.body)
        res.status(201).json({
            success:true,
            data:attendance,
            message:"Attendance Added Successfully !!"
        })
    }catch(error)
    {
        console.error("Error: ",error)
        res.status(500).json({message:"Internal Server Error......"})
    }
}

exports.updateAttendance = async (req,res,next)=>{
    try{
        const updatedAttendance = await attendanceService.updateAttendance(req.params.id,req.body)
        if(!response){
            return res.status(404).json({message:"Not Found !!"})
        }
        res.status(201).json({
            success:true,
            message:"Attendance Updated Successfully !!",
            data:updatedAttendance
        })
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
        res.status(200).json({
            success:true,
            message:"Attendance Deleted Successfully !!"
        })
    }catch(error){
        console.error('Error: ',error)
        res.status(500).json({message:"Internal Server Error......"})
    }
}