import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import Column from "./Column";

const tempData = {
  tasks: {},
  columns: {
    todo: [],
    inprogress: [],
    done: []
  }
};
function App() {
  const [data, setData] = useState(tempData);

  const cols = Object.keys(data.columns);

  function addTask(taskText, status) {
    const id = Date.now().toString();
    const newTask = { id, title: taskText, status };
    setData(prev => {
      return {
        ...prev,
        tasks: {
          ...prev.tasks,
          [id]: newTask
        },
        columns: {
          ...prev.columns,
          [status]: [...prev.columns[status], id]
        }
      };
    })

  }


  return (
    <div className="app">
      <div>
        <AddTaskForm cols={cols} onAddTask={addTask} />
      </div>
      <div className="columns">
        {cols.map((col) => {
          return <Column col={col} key={col} data={data} />;
        })}
      </div>
    </div>
  );
}

export default App;