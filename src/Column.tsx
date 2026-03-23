import { useState } from "react";
import Tasks from "./Tasks";

export default function Column({ col, data, onMoveTask }) {
    const [isDragOver, setIsDragOver] = useState(false);

    function handleDragOver(e) {
        e.preventDefault();
        setIsDragOver(true);
    }

    function handleDragLeave() {
        setIsDragOver(false);
    }

    function handleDrop(e) {
        e.preventDefault();
        setIsDragOver(false);
        const dragData = e.dataTransfer.getData("application/json");
        if (dragData) {
            const { taskId, fromColumn } = JSON.parse(dragData);
            onMoveTask(taskId, fromColumn, col);
        }
    }

    return (
        <div className="column">
            <h2 className="column-title">
                {col[0].toUpperCase() + col.slice(1)}
            </h2>
            <div
                className={`column-content ${isDragOver ? "drag-over" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <Tasks data={data} col={col} />
            </div>
        </div>
    );
}
