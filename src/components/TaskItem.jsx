import React, { useState, useEffect } from "react";
import TaskItemShow from "./TaskItemShow";
import TaskItemEdit from "./TaskItemEdit";
import fetchTask from "../helpers/script";

const TaskItem = ({ task, onClickDelete }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [taskState, setTaskState] = useState(task.state);

    const onClickUpdate = () => setIsUpdating(!isUpdating);
    const handleNewTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    }
    const handleStateChange = (event) => {
        setTaskState(event.target.checked);
    }

    const onUpdate = (event) => {
        const options = {
            method: 'PUT',
            data: { description: taskDescription, state: taskState }
        };
        fetchTask(options, `/${task.id}`)
            .then(newTask => {
                task = newTask;
                setIsUpdating(false);
            })
            .catch(console.log);
        event.preventDefault();
    }

    useEffect(() => {
        const options = {
            method: 'PUT',
            data: { description: taskDescription, state: taskState }
        };
        fetchTask(options, `/${task.id}`)
            .then(newTask => {
                //12console.log(newTask);
            })
            .catch(console.log);
    }, [taskDescription, taskState]);

    return !isUpdating ?
        <TaskItemShow
            key={task.id}
            id={task.id}
            description={taskDescription}
            state={taskState}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
            onSubmit={onUpdate}
            onChange={handleStateChange} /> :
        <TaskItemEdit
            key={task.id}
            value={taskDescription}
            onChange={handleNewTaskDescriptionChange}
            onSubmit={onUpdate} />
};

export default TaskItem;