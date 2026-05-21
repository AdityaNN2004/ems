const projectService = require('../services/projectService')
const {json} = require('express')

exports.getProjects = async(req,res,next)=>{
    try{
        const projects = await projectService.getProjects()
        if(projects.length === 0){
            return res.status(200).json({
                success:true,
                message:"No data present!!"
            })
        }
        res.status(200).json({
            success:true,
            message:"Fetched Project Successfully!!",
            data:projects
        })
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error!!"
        })
    }
}

exports.createProjects =  async(req,res,next)=>{
    try{
        const project = await projectService.createProject(req.body)
        return res.status(201).json({
            success:true,
            message:"Project Added Successfully!!",
            data:project
        })
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error!!"
        })
    }
}

exports.updateProjects = async(req,res,next)=>{
    try{
        const updatedProject = await projectService.updateProject(req.params.id,req.body)
        if(!response){
            return res.status(404).json({
                success:true,
                message:"Employee Not Found!!"
            })
        }
        res.status(200).json({
            success:true,
            message:"Updated Successfully !!",
            data:updatedProject
        })
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error!!"
        })
    }
}

exports.deleteProject = async(req,res,next)=>{
    try{
        const {id} = req.params
        const deletedEmp = await projectService.deleteProject(id)
        if(!deletedEmp){
            return res.status(404).json({
                success:true,
                message:"Employee Not Found!!"
            })
        }
        res.status(200).json({
            success:true,
            message:"Deleted Successfully!!"
        })
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error!!"
        })
    }
}