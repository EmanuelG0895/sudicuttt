"use client";

import { useTasks } from "../context/TasksContext";
import { VscTasklist } from "react-icons/vsc";
import { TaskCard } from "../components/TaskCard";

function Home() {
  const { tasks } = useTasks();

  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h2>No hay tareas</h2>
          <VscTasklist size="8rem" />
        </div>
      ) : (
        <div className="col-md-12 mt-4">
          <div className="row">
            {tasks.map((task, i) => (
              <TaskCard task={task} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
