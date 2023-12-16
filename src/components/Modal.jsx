import React from "react";

const Modal = ({ task, onDelete, onClick }) => (
    <div className="modal">
        <div className="modal-header">
            <h3 className="title">Eliminar Item</h3>
        </div>
        <div className="modal-content">
            <p className="text-center">{task.description}</p>
        </div>
        <div className="modal-footer">
            <button onClick={onClick} type="button">Cancelar</button>
            <button onClick={() => onDelete(task.id)} type="button">Aceptar</button>
        </div>

    </div>
);

export default Modal;