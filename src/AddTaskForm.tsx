import { useState } from "react";

export default function AddTaskForm({ cols, onAddTask }) {
    const [taskText, setTaskText] = useState("");
    const [status, setStatus] = useState("");

    function handleAddTask(e) {
        e.preventDefault();
        if (taskText.trim() && status) {
            onAddTask(taskText, status);
            setStatus("");
            setTaskText("");
        }
    }

    return (
        <div className="add-task-form">
            <h2>Add New Task</h2>
            <form onSubmit={handleAddTask} className="form">
                <div className="form-group">
                    <input
                        type="text"
                        value={taskText}
                        onChange={e => setTaskText(e.target.value)}
                        placeholder="Enter task description..."
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        className="form-select"
                        required
                    >
                        <option value="">Select Status</option>
                        {cols.map((col) => {
                            return <option key={col} value={col}>
                                {col.charAt(0).toUpperCase() + col.slice(1)}
                            </option>
                        })}
                    </select>
                </div>
                <button type="submit" className="form-button" disabled={!taskText.trim() || !status}>
                    Add Task
                </button>
            </form>
        </div>
    );
}