export default function TaskCard({ task }) {
    const getStatusClass = (status) => {
        switch (status) {
            case 'todo':
                return 'task-card--todo';
            case 'inprogress':
                return 'task-card--inprogress';
            case 'done':
                return 'task-card--done';
            default:
                return '';
        }
    };

    return <div className={`task-card ${getStatusClass(task.status)}`}
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
