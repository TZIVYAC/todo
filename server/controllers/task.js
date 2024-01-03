const taskList = [
    { taskId: '1', taskTypeId: '2', taskName: 'exception' }
]

exports.addTask = (req, res) => {
    taskList.push(req.body)
    res.send(taskList)
}

exports.getAllTasks = (req, res) => {
    res.send(taskList)
}

exports.deleteTaskById = (req, res) => {
    const { id } = req.params
    const task = taskList.find(t => t.taskId === id)
    if(!task){
        res.status(404).json({massage:"task undefinded"})
    }
    else{
        taskList.splice(task,1)
    }
    res.send(taskList)
}

exports.updateTaskById=(req,res)=>{
    const { id } = req.params
    const { typeId } = req.params
    const { name } = req.params
    const task = taskList.find(t => t.taskId === id)
    if(!task){
        res.status(404).json({massage:"task undefinded"})
    }
    else{
        taskList[task].taskName=name;
        taskList[task].taskName=typeId;
        res.status(200).json({massage:"successed"})
    }
}