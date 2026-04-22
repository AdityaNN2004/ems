const express = require("express")
const router = express.Router()
const projectController = require('../controllers/projectController')

router.get('/',projectController.getProjects)
router.post('/',projectController.createProjects)
router.put('/:id',projectController.updateProjects)
router.delete('/:id',projectController.deleteProject)

module.exports = router