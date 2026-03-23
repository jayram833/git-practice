import TaskCard from "./TaskCard";

export default function Tasks({ data, col }) {
    const { tasks, columns } = data;
    return <div className="task-list">
        {columns[col].map((item) => {
            return <TaskCard key={tasks[item].id} task={tasks[item]} />
        })}
    </div>
}