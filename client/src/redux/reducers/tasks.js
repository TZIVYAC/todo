import { produce } from 'immer';

const initialState = {
    taskType: [],
    taskList: []
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_TASK_TO_LIST':
            {
                state.taskList.push(action.payload)
            }
            break;
        case 'UPDATE_TASK':
            {
                const index = state.taskList.findIndex(num => num.taskId === action.payload.taskId)
                state.taskList[index].taskTypeId = action.payload.taskTypeId
            }
            break;
        case 'DELETE_TASK':
            {
                const index = state.taskList.findIndex(num => num.taskId === action.payload.taskId)
                state.taskList.splice(index, 1);
            }
            break;
        case 'GET_ALL_TASKS':
            {
                state.tasksList = action.payLoad
            }
            break;
    }
}, initialState)