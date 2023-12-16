import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onClick }) => {
    console.log(tasks);
    return (
        <div className="list-item">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onClickDelete={onClick} />
            ))}
        </div>
    );
};

export default TaskList;