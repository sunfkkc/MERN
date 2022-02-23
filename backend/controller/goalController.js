const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find() //Goal = mongoose.model('Goal', goalSchema)
    res.status(200).json({ goals })
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const postGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ 'mgs': `put goals ${req.params.id}` })
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ 'mgs': `delete goals ${req.params.id}` })
})
module.exports = { getGoals, postGoals, putGoals, deleteGoals }