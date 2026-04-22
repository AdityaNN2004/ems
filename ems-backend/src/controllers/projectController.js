const projectService = require('../services/projectService')
const {json} = require('express')

exports.getProjects = async(req,res,next)=>{
    try{
        const projects = await projectService.getProjects()
        if(projects.length === 0){
            return res.status(200).json({message:"No data present!!"})
        }
        res.status(200).json(projects)
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({message:"Internal Server Error!!"})
    }
}

exports.createProjects =  async(req,res,next)=>{
    try{
        const response = await projectService.createProject(req.body)
        return res.status(201).json({message:"Project Added!!"})
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({message:"Internal Server Error!!"})
    }
}

exports.updateProjects = async(req,res,next)=>{
    try{
        const response = await projectService.updateProject(req.params.id,req.body)
        if(!response){
            return res.status(404).json({message:"Employee Not Found!!"})
        }
        res.status(200).json({data:response,message:"Updated Successfully !!"})
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({message:"Internal Server Error!!"})
    }
}

exports.deleteProject = async(req,res,next)=>{
    try{
        const {id} = req.params
        const deletedEmp = await projectService.deleteProject(id)
        if(!deletedEmp){
            return res.status(404).json({message:"Employee Not Found!!"})
        }
        res.status(200).json({message:"Deleted Successfully!!"})
    }catch(error){
        console.log("Error: ",error)
        res.status(500).json({message:"Internal Server Error!!"})
    }
}