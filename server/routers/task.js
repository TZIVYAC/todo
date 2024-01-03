const express = require('express');
const router = express.Router();
const { addTask,getAllTasks ,deleteTaskById,updateTaskById} = require('../controllers/task')

router.post('/',addTask)
router.get('/',getAllTasks)
router.delete('/:taskId',deleteTaskById)
router.put('/:id,typeId,name',updateTaskById)

module.exports=router