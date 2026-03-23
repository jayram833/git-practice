import { useState } from "react";

export default function AddTaskForm({ cols, onAddTask }) {
    const [taskText, setTaskText] = useState("");
    const [status, setStatus] = useState("");

    function handleAddTask(e) {
        e.preventDefault();
        onAddTask(taskText, status);
        setStatus("");
        setTaskText("");
    }

    return <form onSubmit={handleAddTask}>
        <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
        <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="">Status</option>
            {cols.map((col) => {
                return <option key={col} value={col}>{col}</option>
            })}
        </select>
        <button type="submit">Add</button>
    </form>
}