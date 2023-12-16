import React from "react";

const TaskItemEdit = ({ value, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="item">
            <input type="text" onChange={onChange} value={value} className="full-parent" />
        </form>
    );
};

export default TaskItemEdit;