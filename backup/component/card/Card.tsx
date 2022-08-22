import { useState } from "react";
import { Task } from "../../model/todos";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

interface cardProps {
  cardName: string;
  onDeleteCard: (id: string) => void;
}

function Card({ cardName, onDeleteCard: deleteCard }: cardProps) {
  const [task, setTask] = useState<Task[]>([]);

  const deleteCardHandler = (e: React.FormEvent) => {
    e.preventDefault();
    deleteCard;
  };

  const deleteTask = (id: string) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const updateTask = (id: string, updatedTask: string) => {
    setTask(
      task.map((item) => {
        if (item.id === id) {
          item.name = updatedTask;
        }
        return item;
      })
    );
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>{cardName}</span>
        <button className="btn btn-sm" onClick={deleteCardHandler}>
          <i className="bi-x-lg"></i>
        </button>
      </div>
      <TaskList
        task={task}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
      <div className="card-body">
        <NewTask cardTask={task} onSetTask={setTask} />
      </div>
    </div>
  );
}

export default Card;
