export default function TaskCard({ task }) {
    return <div className="task-card"
        draggable
        onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("application/json", JSON.stringify({
                taskId: task.id,
                fromColumn: task.status
            }));
        }}
        onDragEnd={(e) => {
            e.dataTransfer.dropEffect = "move";
        }}
    >
        <p>{task.title}</p>
    </div>
}
