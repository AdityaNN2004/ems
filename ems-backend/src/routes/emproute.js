const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()
const empController = require('../controllers/empController')

dotenv.config()

router.get('/', empController.getEmp)
router.post('/', empController.createEmp)
router.put('/:id',empController.updateEmp)
router.delete('/:id',empController.deleteEmp)

module.exports = router