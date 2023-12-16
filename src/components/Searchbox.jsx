import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className="task-form">
        <input type="text" value={value} onChange={onChange} />
        <button type="submit"> <FontAwesomeIcon icon={faPlus} /> Agregar</button>
    </form>
);
export default SearchBox;