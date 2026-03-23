export default function TaskCard({ task }) {
    return <div className="task-card"
        draggable
        onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", "Dragged!");
        }}
    >
        <p>{task.title}</p>
    </div>
}
