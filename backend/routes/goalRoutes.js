const express = require('express')
const router = express.Router()
const { getGoals, postGoals, putGoals, deleteGoals } = require('../controller/goalController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getGoals)

router.post('/', protect, postGoals)

router.put('/:id', protect, putGoals)

router.delete('/:id', protect, deleteGoals)
module.exports = router