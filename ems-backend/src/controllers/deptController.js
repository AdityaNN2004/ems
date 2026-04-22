const { json } = require('express')
const deptService = require('../services/deptService')

exports.getDept =async(req,res,next)=>{
    try{
        const depts = await deptService.getDept()
        res.status(200).json(depts)
    }
    catch(exception){
        res.status(500).json({message:"Internal Server Error !!"})
        console.error(exception)
    }
}

exports.createDept=async(req,res,next)=>{
    try{
        const dept = await deptService.createDept(req.body)
        res.status(201).json({data:dept,message:"Created Department Successfully!!"})
    }catch(exception){
        res.status(500).json({message:"Internal Server Error !!"})
        console.error(exception)
    }
}

exports.updateDept= async(req,res,next)=>{
    try{
        const {id} = req.params
        const updatedDept = await deptService.editDept(id,req.body)
        if(!updatedDept){
            return res.status(404).json({message:"Department Not Found !!"})
        }
        res.status(200).json(updatedDept,{message:"Department Updated Successfully !!"})
    }catch(exception){
        res.status(500).json({message:"Internal Server Error !!"})
        console.error(exception)
    }
}

exports.removeDept= async(req,res,next)=>{
   try{
     const {id} = req.params
    const deletedDept = await deptService.removeDept(id)
    if(!deletedDept){
            return res.status(404).json({message:"Department Not Found !!"})
    }
    res.status(200).json({message:"Department Deleted Successfully !!"})
   }
   catch(exception){
        res.status(500).json({message:"Internal Server Error !!"})
        console.error(exception)
   }
}