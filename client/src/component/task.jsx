import React, { useEffect, useState } from "react";
import { deleteTask } from "../redux/action";
import { updateTask } from "../redux/action";
import { connect } from "react-redux";
import Carrousel from "./carrousel";
import img1 from '../image/img1.JPG';
import img2 from '../image/img2.png'
import img3 from '../image/img3.png'
import img4 from '../image/img4.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function mapStateToProps(state) {
    return { taskList: state.tasks.taskList }
}

export default connect(mapStateToProps)(function TaskData(props) {
    const { id, tasksContact, taskList, dispatch } = props
    const [flagImage, setFlagImage] = useState(false)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const deleteOneTask = async (taskId, taskName, taskTypeId, contactTaskId, contactTaskName) => {
        try {
            const response = await axios.delete(`http://localhost:8000/task/${id}`)
            if (response.status == 200) {
                dispatch(deleteTask({ taskId: id }))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }

    const updateOneTask = async (taskTypeId) => {
        try {
            const response = await axios.put('http://localhost:8000/task/', { taskId: id, taskTypeId: taskTypeId })
            if (response.status == 200) {
                dispatch(updateTask({ taskId: id, taskTypeId: taskTypeId }))
            }
        }
        catch (error) {
            console.log("oops")
        }
    }

    const searchTask = tasksContact.filter(num => num.taskId == id)

    const change = ((taskTypeId) => {
        updateOneTask(taskTypeId)
    })

    const remove = (() => {
        deleteOneTask()
    })

    const pictures = (() => {
        setFlagImage(!flagImage)
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {searchTask.map((task) => (
                < Container sx={{ py: 8 }} maxWidth="md" >
                    <React.Fragment>
                        <Grid container spacing={4}>
                            <Grid item key={task.taskId} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {task.taskName}
                                        </Typography>
                                        <Typography>
                                            taskId: {task.taskId}<br />taskTypeId: {task.taskTypeId}<br />contactTaskId: {task.contactTaskId}<br />contactTaskName: {task.contactTaskName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={handleClickOpen}>edit</Button>
                                        <Button onClick={remove}>remove</Button>
                                        <Button onClick={pictures}>more explain...</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        {flagImage && <Carrousel><img src={img1} width={800} height={300} /><img src={img2} width={800} height={300} /><img src={img3} width={800} height={300} /><img src={img4} width={800} height={300} /></Carrousel>}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                component: 'form',
                                onSubmit: (event) => {
                                    event.preventDefault();
                                    const formData = new FormData(event.currentTarget);
                                    const formJson = Object.fromEntries(formData.entries());
                                    const taskTypeId = formJson.taskTypeId;
                                    console.log(taskTypeId);
                                    change(taskTypeId)
                                    handleClose();
                                },
                            }}
                        >
                            <DialogTitle>Change Now</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    enter a new task type id
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="taskTypeId"
                                    name="taskTypeId"
                                    label="Task Type Id"
                                    type="taskTypeId"
                                    fullWidth
                                    variant="standard"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment>
                </Container >
            ))}
        </>
    )
});

