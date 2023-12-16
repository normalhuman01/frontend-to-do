import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const TaskItemShow = ({ id, description, state, onClickDelete, onClickUpdate, onChange }) => {

    return (
        <div className="item">
            <div>
                <label>
                    <input type="checkbox" checked={state} onChange={onChange} />
                    <span>{description}</span>
                </label>
            </div>
            <div>
                <span className="button">
                    <button onClick={onClickUpdate}
                        type="button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </span>
                <span className="button">
                    <button onClick={() => onClickDelete({ id, description, state })}
                        type="button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default TaskItemShow;