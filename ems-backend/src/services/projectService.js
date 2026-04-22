const Project = require('../models/Project')

const getProjects = () => Project.find().populate('deptId').populate('teamMembers')
const createProject = (data) => Project.create(data)
const updateProject = (id,data) => Project.findByIdAndUpdate(id,data)
const deleteProject = (id) => Project.findByIdAndDelete(id)

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}

