import { produce } from 'immer';

const initialState = {
    taskType: [
        { taskTypeId: '1', taskTypeName: 'bug' },
        { taskTypeId: '2', taskTypeName: 'task' }
    ],
    taskList: [
        { taskId: '1', taskTypeId: '1', taskName: 'exceptionArray', contactTaskId: '123', contactTaskName: 'Avi Levi' },
        { taskId: '2', taskTypeId: '2', taskName: 'lcreate_login', contactTaskId: '123', contactTaskName: 'Avi Levi' },
        { taskId: '3', taskTypeId: '2', taskName: 'create_homePage', contactTaskId: '147', contactTaskName: 'Michael Rov' }
    ]
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_TYPE_OF_TASK':
            { state.taskType.push(action.payload) }
            break;
        case 'ADD_TASK_TO_LIST':
            { state.taskList.push(action.payload) }
            break;
        // case 'UPDATE_TASK':
        //     {
        //         // איך מעדכנים פרטי משימה מסויימת
        //         var task = state.taskList.find(num => num.taskId == action.payload.taskId)
        //         task.taskTypeId = action.payload.taskTypeId
        //         task.taskName = action.payload.taskName
        //         task.contactTaskId = action.payload.contactTaskId
        //         task.contactTaskName = action.payload.contactTaskName
        //     }
        //     break;

        case 'DELETE_TASK':
            {
                const index = state.taskList.findIndex(num => num.taskId === action.payload.id)
                state.taskList.splice(index,1);
            }
            break;
    }
}, initialState)