import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import SearchBox from "./Searchbox";
import Modal from "./Modal";
import fetchTask from "../helpers/script";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDescription: "",
            modal: false,
            taskToDelete: null,
            tasks: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    render() {
        return (
            <>
                <Header />
                <SearchBox
                    value={this.state.taskDescription}
                    onChange={this.handleTaskDescriptionChange}
                    onSubmit={this.onSubmit} />
                <TaskList
                    tasks={this.state.tasks} onClick={this.showModal} />
                {this.state.modal && <Modal task={this.state.taskToDelete} onDelete={this.onDelete} onClick={this.hideModal} />}
            </>
        );
    }

    componentDidMount() {
        fetchTask()
            .then(tasks => {
                this.setState({ tasks })
            })
            .catch(console.log);
    }

    onSubmit(event) {
        const { taskDescription } = this.state;
        const options = {
            method: 'POST',
            data: {
                description: taskDescription,
                state: false
            }
        };
        fetchTask(options)
            .then(task => {
                const tasks = [...this.state.tasks, task]
                this.setState({ taskDescription: " ", tasks });
            })
            .catch(console.log);
        event.preventDefault();
    }

    onDelete(id) {
        const options = {
            method: 'DELETE',
            data: { id }
        };
        fetchTask(options, `/${id}`)
            .then(id => {
                const tasks = this.state.tasks.filter(task => task.id !== id);
                console.log(tasks);
                this.setState({ tasks: tasks, modal: false });
            })
            .catch(console.log);
    }

    handleTaskDescriptionChange(event) {
        this.setState({ taskDescription: event.target.value });
    }

    hideModal() {
        this.setState({ modal: false })
    }

    showModal(task) {
        this.setState({ taskToDelete: task, modal: true })
    }

}



export default Tasks;