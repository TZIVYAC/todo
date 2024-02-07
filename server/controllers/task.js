const Task = require('../models/task')

exports.addTask = async(req,res)=>{
    const task = await Task.create(req.body);
    res.json(task)
};

exports.deleteTaskById = async (req, res) => {
    const  taskId  = req.params.taskId;
  console.log(taskId);
    try {
      const deleteTaskById = await Task.findOneAndDelete({ taskId: taskId });
      if (!deleteTaskById) {
        return res.status(404).json({ massage: 'Task not found' });
      }
      res.json({ massage: 'Task deleted successfully' });
    } catch (error) {
      console.error('Failed to delete task:', error);
      res.status(500).json({ massage: 'Failed to delete task' });
    }
  };

  exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get contacts:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };

  exports.getAllTasksById = async (req, res) => {
    try {
      const id=req.params.id;
      const tasks = await Task.find({contactTaskId:id});
      res.json(tasks);
    } catch (error) {
      console.error('Failed to get contacts:', error);
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  };
  
  exports.updateTaskById = async (req, res) => {
    const taskId = req.body.taskId;
    const taskTypeId = req.body.taskTypeId;
    const query = { taskId: taskId };
    const update = { $set: { taskTypeId: taskTypeId } };
    try {
      const updateTaskById = await Task.findOneAndUpdate( query,update);
      if (!updateTaskById) {
        return res.status(404).json({ massage: 'Task not found' });
      }
      res.json(updateTaskById);
    } catch (error) {
      console.error('Failed to update task:', error);
      res.status(500).json({ massage: 'Failed to update task' });
    }
  };
