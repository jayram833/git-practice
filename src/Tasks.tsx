import TaskCard from "./TaskCard";

export default function Tasks({ data, col }) {
    const { tasks, columns } = data;
    return <div>
        {columns[col].map((item) => {
            return <TaskCard key={tasks[item].id} task={tasks[item]} />
        })}
    </div>
}