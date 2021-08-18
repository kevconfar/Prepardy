// const express = require('express')
// const router = express.Router()
// const Clue = require('../connections/clues')


// // GET ONE CLUE
// router.get('/questions/:id', async (req, res) => {
//     try {
//         const _id = req.params.id

//         const clue = await Clue.findOne({ _id })
//         if (!clue) {
//             return res.status(404).json({})
//         } else {
//             return res.status(200).json(clue)
//         }
//     } catch (error) {
//         return res.status(500).json({ "error": error })
//     }
// })