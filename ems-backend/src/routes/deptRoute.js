const deptController = require('../controllers/deptController')
const express = require('express')
const router = express.Router()

router.get('/',deptController.getDept)
router.post('/',deptController.createDept)
router.put('/:id',deptController.updateDept)
router.delete('/:id',deptController.removeDept)

module.exports = router