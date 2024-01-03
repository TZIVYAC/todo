import React, { useEffect } from "react";
import { useRef } from "react";
import { deleteTask } from "../redux/action";
import { updateTask } from "../redux/action";
import { connect } from "react-redux";
import Carrousel from "./carrousel";
import img1 from '../image/nn.JPG';


function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function TaskData(props) {
    const { id, taskList, dispatch } = props

    // useEffect(function () {
    //     console.log("contactsList", taskList)
    // }, [, taskList]);

    // const edit = (() => {
    //     dispatch(updateTask({ id: taskIdRef.current.value, taskType: taskTypeIdRef.current.value, name: taskNameRef.current.value, contactId: contactTaskIdRef.current.value, contactName: contactTaskNameRef.current.value }))
    // })
    const remove = (() => {
        dispatch(deleteTask({ taskId: id }))
    })
    const serachTask = taskList.filter(num => num.taskId == id)
    return (
        <>
            <ul>
                {
                    serachTask.map((task) => (<li key={task.taskId}>
                        <label> taskName: </label>
                        <br></br>
                        <span>{task.taskName}</span>
                        <br></br>
                        <label> taskType:</label>
                        <br></br>
                        <span>{task.taskTypeId}</span>
                        <br></br>
                        <label>contactTask:</label>
                        <br></br>
                        <span>{task.contactTaskName}</span>
                        <br></br>
                        <label>idContactTask:</label>
                        <br></br>
                        <span>{task.contactTaskID}</span>
                    </li>))
                }
            </ul>
            {/* <Carrousel>
                <img src={img1}/>
            </Carrousel> */}
            {/* <button onClick={edit}>edit</button> */}
            <button onClick={remove}>remove</button>
        </>
    )
})