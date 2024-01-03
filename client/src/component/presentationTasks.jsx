import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { addTaskToList } from "../redux/action"
import { connect } from "react-redux";
import TaskData from "./task";
import EnterTask from "./enteringTask";

function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function ShowTaskList(props) {
    const { taskList, dispatch } = props
    const [flag, setFlag] = useState(false);

    const add = (() => {
        setFlag(true)
    })

    //   useEffect(function () {
    //     console.log("contactsList", taskList)
    // }, [, taskList]);

    return (
        <>
            {taskList.map(task => {
                <TaskData key={task.taskId} id={task.taskId} />
            })}
            <button onClick={add}>add task</button>
            {!flag || <EnterTask setFlag={setFlag}/>}
        </>
    )
})